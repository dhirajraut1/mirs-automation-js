import test from "@playwright/test";
import { faker } from "@faker-js/faker";
import { UserPage } from "../../../pages/access-control/user/user.pom";

test.describe("Users", () => {
  test.beforeEach("Login", async ({ page }) => {
    await page.goto("/login");
    await page.locator("#username").fill(process.env.USER_NAME);
    await page.locator("#password-input").fill(process.env.USER_PASS);
    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForURL(`${process.env.BASE_URL}/dashboard`);
  });

  test("New User Creation", async ({ page }) => {
    const User = new UserPage(page);

    const role = "PartnerAdmin - Branch";
    const partner = "AE0001 - LARI EXCHANGE UAE";
    const branch = "LARI0001 - UAE HEAD OFFICE";
    const userName = faker.person.firstName();
    const fullName = faker.person.fullName();
    const email = `${Math.random().toString(36).substring(7)}@lariexchange.com`;
    const phone = "1234567890";
    const faxNumber = "1234567890";

    await User.navigate();
    await User.clickAddButton();
    await User.selectRole(role);
    await User.selectPartner(partner);
    await User.selectBranch(branch);
    await User.fillUserName(role, userName);
    await User.fillFullName(role, fullName);
    await page.waitForTimeout(1000);
    await User.fillEmail(email);
    await page.waitForTimeout(1000);
    await User.fillPhoneNumber(phone);
    await User.clickAddPhoneButton();
    await User.fillFaxNumber(faxNumber);
    await User.clickAddFaxButton();
    await User.fillStandardLoginStartTime("04", "10");
  });
});
