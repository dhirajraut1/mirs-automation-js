import { Page } from "@playwright/test";

export const fillDateInput = async (page, hour, minute) => {
  const hourField = page.locator('[data-test="hours-toggle-overlay-btn-0"]');
  const minuteField = page.locator(
    '[data-test="minutes-toggle-overlay-btn-0"]'
  );
  const roundedMinute = Math.floor(Math.floor(minute) / 5) * 5;

  await hourField.click();
  await page.getByText(hour).click();
  await minuteField.click();
  await page.getByText(roundedMinute).click();
  await page.getByLabel("Switch AM/PM mode").click();
};
