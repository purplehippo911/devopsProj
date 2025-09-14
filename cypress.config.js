const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "undefined",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
