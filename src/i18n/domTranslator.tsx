/**
 * Runtime DOM translator.
 *
 * Why this exists:
 * The site has thousands of lines of hard-coded French copy across many routes.
 * Rather than rewriting every component to use t(), we build a FR <-> EN lookup
 * from the existing i18n resources and swap visible text nodes on language change.
 *
 * How it works:
 * - On language change, walk all text nodes under <main>/<header>/<footer>.
 * - For each text node, look up its trimmed content in the FR->EN (or EN->FR) map.
 * - If found, replace it. Original FR text is cached per node so we can switch back.
 * - A MutationObserver re-translates new nodes added by route navigation.
 */

import { useEffect } from "react";
import i18n from "./index";
import { en, fr } from "./resources";

type StringMap = Record<string, string>;

function flatten(obj: unknown, out: string[] = []): string[] {
  if (typeof obj === "string") {
    out.push(obj);
  } else if (Array.isArray(obj)) {
    obj.forEach((v) => flatten(v, out));
  } else if (obj && typeof obj === "object") {
    Object.values(obj).forEach((v) => flatten(v, out));
  }
  return out;
}

const enStrings = flatten(en);
const frStrings = flatten(fr);

// Build FR->EN and EN->FR maps. Both arrays are walked in parallel because the FR
// resource object is declared as `typeof en` so it has the exact same shape/order.
const FR_TO_EN: StringMap = {};
const EN_TO_FR: StringMap = {};
for (let i = 0; i < Math.min(frStrings.length, enStrings.length); i++) {
  const f = frStrings[i];
  const e = enStrings[i];
  if (!f || !e || f === e) continue;
  // Strip interpolation placeholders like {{year}} for matching purposes? Keep
  // exact match for now; placeholder strings are rare in visible static copy.
  if (!FR_TO_EN[f]) FR_TO_EN[f] = e;
  if (!EN_TO_FR[e]) EN_TO_FR[e] = f;
}

// Cache original (FR) text per text node so EN -> FR works even when the FR
// dictionary doesn't include a given snippet.
const ORIGINAL = new WeakMap<Text, string>();

function translateNode(node: Text, target: "en" | "fr") {
  const raw = node.nodeValue;
  if (!raw) return;
  const trimmed = raw.trim();
  if (!trimmed) return;

  // Remember original (assumed FR) the first time we see the node.
  if (!ORIGINAL.has(node)) ORIGINAL.set(node, raw);

  if (target === "fr") {
    const original = ORIGINAL.get(node);
    if (original && original !== raw) node.nodeValue = original;
    return;
  }

  // target === "en"
  const lookupKey = trimmed;
  const translated = FR_TO_EN[lookupKey];
  if (translated) {
    // Preserve surrounding whitespace
    const leading = raw.match(/^\s*/)?.[0] ?? "";
    const trailing = raw.match(/\s*$/)?.[0] ?? "";
    node.nodeValue = leading + translated + trailing;
  }
}

function walk(root: Node, target: "en" | "fr") {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      const parent = n.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
      const v = n.nodeValue?.trim();
      if (!v) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let n: Node | null = walker.nextNode();
  while (n) {
    translateNode(n as Text, target);
    n = walker.nextNode();
  }
}

// Translate placeholder/title/aria-label/alt attributes too.
const ATTRS = ["placeholder", "title", "aria-label", "alt"] as const;
const ORIGINAL_ATTR = new WeakMap<Element, Map<string, string>>();

function translateAttrs(root: ParentNode, target: "en" | "fr") {
  const all = root.querySelectorAll("[placeholder],[title],[aria-label],[alt]");
  all.forEach((el) => {
    let cache = ORIGINAL_ATTR.get(el);
    if (!cache) {
      cache = new Map();
      ORIGINAL_ATTR.set(el, cache);
    }
    for (const attr of ATTRS) {
      const cur = el.getAttribute(attr);
      if (cur == null) continue;
      if (!cache.has(attr)) cache.set(attr, cur);
      if (target === "fr") {
        const original = cache.get(attr);
        if (original != null && original !== cur) el.setAttribute(attr, original);
      } else {
        const t = FR_TO_EN[cur.trim()];
        if (t) el.setAttribute(attr, t);
      }
    }
  });
}

let observer: MutationObserver | null = null;
let currentTarget: "en" | "fr" = "fr";

function applyAll(target: "en" | "fr") {
  currentTarget = target;
  if (typeof document === "undefined") return;
  walk(document.body, target);
  translateAttrs(document.body, target);
}

function startObserver() {
  if (typeof document === "undefined") return;
  if (observer) return;
  observer = new MutationObserver((mutations) => {
    if (currentTarget === "fr") return; // FR is the source of truth, no work needed
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          translateNode(node as Text, currentTarget);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          walk(node, currentTarget);
          translateAttrs(node as Element, currentTarget);
        }
      });
      if (m.type === "characterData" && m.target.nodeType === Node.TEXT_NODE) {
        translateNode(m.target as Text, currentTarget);
      }
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}

/** Mount once at the app root. Watches i18n.language and translates the DOM. */
export function DomTranslator() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const apply = () => {
      const target = i18n.language?.startsWith("en") ? "en" : "fr";
      // Defer to next frame so React has flushed the latest render.
      requestAnimationFrame(() => applyAll(target));
    };

    startObserver();
    apply();

    i18n.on("languageChanged", apply);
    return () => {
      i18n.off("languageChanged", apply);
    };
  }, []);

  return null;
}
