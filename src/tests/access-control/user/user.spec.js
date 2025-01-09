import test from "@playwright/test";
import { UserPage } from "../../../pages/access-control/user/user.pom";

test("User creation", async ({ page }) => {
  await page.goto("/login");
  await page.locator("#username").fill(process.env.USER_NAME);
  await page.locator("#password-input").fill(process.env.USER_PASS);
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForURL(`${process.env.BASE_URL}/dashboard`);

  await page.goto("/access-control/user");
  await page.waitForURL(`${process.env.BASE_URL}/access-control/user`);
  await page.getByRole("button", { name: "Add" }).click();
  await page
    .locator(
      "xpath=/html/body/div[1]/div/div[2]/div/div/div/div/form/div[1]/div/div[1]/div[1]/div/button/span"
    )
    .click();
  await page.getByText("PartnerAdmin - Branch").click();
  await page
    .locator(
      "xpath=/html/body/div[1]/div/div[2]/div/div/div/div/form/div[1]/div/div[2]/div[1]/div/button/span"
    )
    .click();

  await page.getByText("AE0001 - LARI EXCHANGE UAE").click();
  await page
    .locator(
      "xpath=/html/body/div[1]/div/div[2]/div/div/div/div/form/div[1]/div/div[3]/div[1]/div/button/span"
    )
    .click();

  await page.getByText("LARI0001 - UAE HEAD OFFICE").first().click();
  await page
    .locator("form div")
    .filter({ hasText: "Add Personal Details Role" })
    .getByRole("textbox")
    .first()
    .fill("Automated User");
  await page
    .locator("form div")
    .filter({ hasText: "Add Personal Details Role" })
    .getByRole("textbox")
    .nth(1)
    .fill("Full Automated User");

  await page
    .locator("form div")
    .filter({ hasText: "Contact Information Email" })
    .getByRole("textbox")
    .first()
    .fill(Math.random().toString(36).substring(7) + "@lariexchange.com");

  await page
    .locator("form div")
    .filter({ hasText: "Contact Information Email" })
    .getByRole("textbox")
    .nth(1)
    .fill("1234567890");
  await page.getByRole("button", { name: "Add" }).first().click();
  await page.waitForTimeout(1200);
  await page
    .locator("form div")
    .filter({ hasText: "Contact Information Email" })
    .getByRole("textbox")
    .nth(2)
    .fill("1234567890");
  await page.getByRole("button", { name: "Add" }).nth(1).click();
});
