import test from "@playwright/test";
import { faker } from "@faker-js/faker";
import { CurrencyPage } from "../../../pages/configuration/pre-configuration/currency.pom";

test.describe("ID Setup", () => {
  test.beforeEach("Login", async ({ page }) => {
    await page.goto("/login");
    await page.locator("#username").fill(process.env.USER_NAME);
    await page.locator("#password-input").fill(process.env.USER_PASS);
    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForURL(`${process.env.BASE_URL}/dashboard`);
  });

  test("Setup New ID", async ({ page }) => {
    const Currency = new CurrencyPage(page);

    const name = faker.person.firstName();
    const code = "NPR";
    const desc = faker.lorem.lines(2);
    const decimal = faker.lorem.lines(1);
    const numericCode = faker.number.int().toString();

    await Currency.navigate();
    await Currency.clickAddButton();
    await Currency.fillCurrencyName(name);
    await Currency.fillCurrencyCode(code);
    await Currency.fillDescription(desc);
    await page.waitForTimeout(1000);
    await Currency.fillDecimal(decimal);
    await Currency.fillNumericCode(numericCode);
  });
});
