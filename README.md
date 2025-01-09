# MIRS Automation

## Automated end-to-end test suite for MIRS

### Getting Started

#### Setup repository

1. Copy `env.example` and create your personal `.env`
2. Install dependencies using command `npm install`
3. Install Playwright browsers and necessary dependencies
   `npx playwright install `
4. Running the tests:

   - Running the tests with traces on:

   ```
   npx playwright test --trace on
   ```

   - Running tests in debug mode:

   ```
   npx playwright test --debug
   ```

   > See more configurations at: [Running and debugging tests](https://playwright.dev/docs/running-tests)

**Preffered to install [Playwright VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) for executing tests**
