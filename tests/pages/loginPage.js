const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    this.loginBtn = '#login2';
    this.username = '#loginusername';
    this.password = '#loginpassword';
    this.loginSubmit = "button[onclick='logIn()']";
    this.logoutBtn = '#logout2';
    this.modal = '#logInModal';
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async openLoginModalIfNeeded() {
    // check if modal already visible
    const isVisible = await this.page.locator(this.modal).isVisible().catch(() => false);

    if (!isVisible) {
      await this.page.click(this.loginBtn);
      await this.page.waitForSelector(this.modal, { state: 'visible' });
    }
  }

  async clickLogin() {
  await this.page.click(this.loginBtn);
  await this.page.waitForSelector(this.modal, { state: 'visible' });
}

  async login(user, pass) {
  
    await this.openLoginModalIfNeeded();

    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);

    await this.page.click(this.loginSubmit);

    // wait for login success
    await this.page.waitForSelector(this.logoutBtn, { state: 'visible' });
  }

  async verifyLogin() {
    await expect(this.page.locator(this.logoutBtn)).toBeVisible();
  }
}

module.exports = LoginPage;