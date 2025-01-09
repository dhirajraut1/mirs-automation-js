export class CurrencyPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.addButton = page.getByRole("button", { name: "Add" });
    this.currencyNameField = page.getByRole("textbox").first();
    this.currencyCodeField = page.getByRole("textbox").nth(1);
    this.descriptionField = page.getByRole("textbox").nth(2);
    this.decimalField = page.getByRole("textbox").nth(3);
    this.numericCodeField = page.getByRole("textbox").nth(3);
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  async navigate() {
    await this.page.goto("configuration/currency");
  }

  async clickAddButton() {
    await this.addButton.first().click();
  }

  async fillCurrencyName(name) {
    await this.currencyNameField.fill(name);
  }

  async fillCurrencyCode(code) {
    await this.currencyCodeField.fill(code);
  }

  async fillDescription(desc) {
    await this.descriptionField.fill(desc);
  }

  async fillDecimal(decimal) {
    await this.decimalField.fill(decimal);
  }

  async fillNumericCode(numericCode) {
    await this.numericCodeField.fill(numericCode);
  }
}
