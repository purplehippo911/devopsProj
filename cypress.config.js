const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "89r73b",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
