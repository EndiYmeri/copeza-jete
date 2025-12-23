// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import { downloadWordpressDataToJSON } from "./wpApiIntegration";

// Define a custom integration
function wordpressAPIIntegration() {
  return {
    name: "Use wp api",
    hooks: {
      "astro:build:start": async () => {
        // Call your custom function here
        await downloadWordpressDataToJSON();
      },
      "astro:config:setup": async () => {
        // Call your custom function here
        await downloadWordpressDataToJSON();
      },
    },
  };
}
// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [react(), wordpressAPIIntegration()],
  vite: {
    plugins: [tailwindcss()],
  },
});