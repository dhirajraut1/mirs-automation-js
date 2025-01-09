import test from "@playwright/test";
import { faker } from "@faker-js/faker";
import { IdSetupPage } from "../../../pages/configuration/pre-configuration/id-setup.pom";

test.describe("ID Setup", () => {
  test.beforeEach("Login", async ({ page }) => {
    await page.goto("/login");
    await page.locator("#username").fill(process.env.USER_NAME);
    await page.locator("#password-input").fill(process.env.USER_PASS);
    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForURL(`${process.env.BASE_URL}/dashboard`);
  });

  test("Setup New ID", async ({ page }) => {
    const IdSetup = new IdSetupPage(page);

    const name = faker.person.firstName();
    const regexPattern = faker.person.fullName();
    const errorMessage = faker.lorem.lines(2);

    await IdSetup.navigate();
    await IdSetup.clickAddButton();
    await IdSetup.fillName(name);
    await IdSetup.fillRegexPattern(regexPattern);
    await IdSetup.fillErrorMessage(errorMessage);
    // await IdSetup.toggleIsExpiryDateRequiredToggle();
  });
});
