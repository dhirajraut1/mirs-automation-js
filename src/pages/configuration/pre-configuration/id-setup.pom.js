export class IdSetupPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.addButton = page.getByRole("button", { name: "Add" });
    this.nameField = page.getByRole("textbox").first();
    this.regexPatternField = page.getByRole("textbox").nth(1);
    this.errorMessageField = page.getByRole("textbox").nth(2);
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.toggleButton = page
      .locator(
        "xpath=/html/body/div[3]/div/div/div/div[2]/div/div/div/div[2]/form/div[1]/div[4]/div[1]/button"
      )
      .click();
  }

  async navigate() {
    await this.page.goto("configuration/id-setup");
  }

  async clickAddButton() {
    await this.addButton.first().click();
  }

  async fillName(name) {
    await this.nameField.fill(name);
  }

  async fillRegexPattern(regexPattern) {
    await this.regexPatternField.fill(regexPattern);
  }

  async fillErrorMessage(errorMessage) {
    await this.errorMessageField.fill(errorMessage);
  }

  async toggleIsExpiryDateRequiredToggle() {
    await this.toggleButton.click();
  }
}
