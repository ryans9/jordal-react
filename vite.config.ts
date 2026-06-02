// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Use the Vercel adapter whenever we run inside Vercel CI/runtime.
// DEPLOY_TARGET remains as an explicit override for local testing.
const deployTarget = process.env.DEPLOY_TARGET;
const isVercel = process.env.VERCEL === "1";
const useVercelTarget = deployTarget === "vercel" || isVercel;

export default defineConfig({
  tanstackStart: useVercelTarget ? { target: "vercel" } : undefined,
  cloudflare: useVercelTarget ? false : undefined,
});
