import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1024,
  viewportHeight: 900,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: `https://staging.siap.tec.br`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
