const { defineConfig } = require("cypress");
require('dotenv').config();


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      USER_NAME: process.env.USER_NAME,
      USER_PASSWORD: process.env.USER_PASSWORD,
    }
  },
  
});
