class SignupPage {
  constructor(page) {
    this.page = page;
    this.signupBtn = '#signin2';
    this.username = '#sign-username';
    this.password = '#sign-password';
    this.signupSubmit = "button[onclick='register()']";
  }

  async clickSignup() {
    await this.page.click(this.signupBtn);
  }

  async register(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
  }

  async submit() {
    await this.page.click(this.signupSubmit);
  }

 async handleDialog(expectedText) {
  this.page.once('dialog', async dialog => {
    const msg = dialog.message();
    console.log("Dialog message:", msg);

    if (expectedText && !msg.toLowerCase().includes(expectedText.toLowerCase())) {
      console.warn("Expected:", expectedText);
      console.warn("Actual:", msg);
    }

    await dialog.accept();
  });

  }
}

module.exports = SignupPage;