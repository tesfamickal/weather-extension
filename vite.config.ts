import * as vite from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default vite.defineConfig({
  plugins: [react(), crx({ manifest })],
});
