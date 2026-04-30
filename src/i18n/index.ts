import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, fr } from "./resources";

const STORAGE_KEY = "jordal-lang";

function detectInitial(): "fr" | "en" {
  if (typeof window === "undefined") return "fr";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "fr") return saved;
  } catch {
    // ignore
  }
  return "fr";
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: detectInitial(),
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export function setLanguage(lng: "fr" | "en") {
  void i18n.changeLanguage(lng);
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, lng);
    } catch {
      // ignore
    }
    document.documentElement.lang = lng;
  }
}

export default i18n;
