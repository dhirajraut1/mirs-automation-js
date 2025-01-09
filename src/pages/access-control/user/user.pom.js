export class UserPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.addButton = page.getByRole("button", { name: "Add" });
    this.roleDropdown = page.locator(
      "xpath=/html/body/div[1]/div/div[2]/div/div/div/div/form/div[1]/div/div[1]/div[1]/div/button/span"
    );
    this.partnerDropdown = page.locator(
      "xpath=/html/body/div[1]/div/div[2]/div/div/div/div/form/div[1]/div/div[2]/div[1]/div/button/span"
    );
    this.branchDropdown = page.locator(
      "xpath=/html/body/div[1]/div/div[2]/div/div/div/div/form/div[1]/div/div[3]/div[1]/div/button/span"
    );
    this.departmentDropdown = page.locator(
      "xpath=/html/body/div[1]/div/div[2]/div/div/div/div/form/div[1]/div/div[2]/div[1]/div[1]/button/span"
    );
    this.idTypeDropdown = page.locator(
      "xpath=/html/body/div[1]/div/div[2]/div/div/div/div/form/div[1]/div/div[3]/div[1]/div/button/span"
    );

    this.idNumberField = page
      .locator("form div")
      .filter({ hasText: "Add Personal Details Role" })
      .getByRole("textbox")
      .first();

    this.emailField = page
      .locator("form div")
      .filter({ hasText: "Contact Information Email" })
      .getByRole("textbox")
      .first();

    this.phoneNumberField = page
      .locator("form div")
      .filter({ hasText: "Contact Information Email" })
      .getByRole("textbox")
      .nth(1);

    this.faxNumberField = page
      .locator("form div")
      .filter({ hasText: "Contact Information Email" })
      .getByRole("textbox")
      .nth(2);

    this.standardLoginStartTime = page
      .locator('[data-test="dp-input"]')
      .first();
  }

  async userNameField(roleNumber) {
    return this.page
      .locator("form div")
      .filter({ hasText: "Add Personal Details Role" })
      .getByRole("textbox")
      .nth(roleNumber);
  }

  async navigate() {
    await this.page.goto("/access-control/user");
  }

  async clickAddButton() {
    await this.addButton.first().click();
  }

  async clickAddPhoneButton() {
    await this.addButton.first().click();
  }

  async clickAddFaxButton() {
    await this.addButton.nth(1).click();
  }

  async selectRole(role) {
    await this.roleDropdown.click();
    await this.page.getByText(role).click();
  }

  async selectDepartment(department) {
    await this.departmentDropdown.click();
    await this.page.getByText(department).click();
  }

  async selectIdType(idType) {
    await this.idTypeDropdown.click();
    await this.page.getByText(idType).first().click();
  }

  async selectPartner(partner) {
    await this.partnerDropdown.click();
    await this.page.getByText(partner).first().click();
  }

  async selectBranch(branch) {
    await this.branchDropdown.click();
    await this.page.getByText(branch).first().click();
  }

  async fillIdNumber(idNumber) {
    await this.idNumberField.fill(idNumber);
  }

  async fillUserName(role, userName) {
    if (role === "PartnerAdmin - Branch") {
      this.page
        .locator("form div")
        .filter({ hasText: "Add Personal Details Role" })
        .getByRole("textbox")
        .first()
        .fill(userName);
    } else {
      this.page
        .locator("form div")
        .filter({ hasText: "Add Personal Details Role" })
        .getByRole("textbox")
        .nth(1)
        .fill(userName);
    }
  }

  async fillFullName(role, fullName) {
    if (role === "PartnerAdmin - Branch") {
      this.page
        .locator("form div")
        .filter({ hasText: "Add Personal Details Role" })
        .getByRole("textbox")
        .nth(1)
        .fill(fullName);
    } else {
      this.page
        .locator("form div")
        .filter({ hasText: "Add Personal Details Role" })
        .getByRole("textbox")
        .nth(2)
        .fill(fullName);
    }
  }

  async fillEmail(email) {
    this.emailField.fill(email);
  }

  async fillPhoneNumber(phoneNumber) {
    this.phoneNumberField.fill(phoneNumber);
  }

  async fillFaxNumber(faxNumber) {
    this.faxNumberField.fill(faxNumber);
  }

  async fillStandardLoginStartTime(hour, minute) {
    await this.standardLoginStartTime.first().click();
    await this.page.waitForTimeout(1000);
    const roundedMinute = Math.floor(Math.floor(minute) / 5) * 5;
    console.log(roundedMinute);
    console.log(hour);
    await this.page
      .locator('[data-test="hours-toggle-overlay-btn-0"]')
      .first()
      .click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText(hour).first().click();
    await this.page
      .locator('[data-test="minutes-toggle-overlay-btn-0"]')
      .first()
      .click();
    await this.page.getByText(roundedMinute).click();
    await this.standardLoginStartTime.first().click();
  }
}
