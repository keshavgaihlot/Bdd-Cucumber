const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.product = '.card-title a';
    this.addToCart = 'a.btn-success';
    this.cart = '#cartur';
  }

  async selectProduct() {
    await this.page.locator(this.product).first().click();
  }

  async addToCartProduct() {
    this.page.once('dialog', async d => await d.accept());
    await this.page.click(this.addToCart);
  }

  async goToCart() {
    await this.page.click(this.cart);
  }

  async verifyCart() {
    await expect(this.page).toHaveURL(/cart/);
  }
}

module.exports = HomePage;