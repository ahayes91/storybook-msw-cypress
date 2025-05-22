import { defineConfig } from "cypress";
import customViteConfig from './cypress.vite.config';

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: customViteConfig,
    },
  },
});
