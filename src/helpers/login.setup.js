import { test as setup } from "@playwright/test";

const authFile = "playwright/.auth/mirs-user.json";

setup("Authenticate", async ({ page }) => {
  await page.goto("/login");
  await page.locator("#username").fill(process.env.USER_NAME);
  await page.locator("#password-input").fill(process.env.USER_PASS);
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForURL(`${process.env.BASE_URL}/dashboard`);

  await page.context().storageState({ path: authFile });
});
