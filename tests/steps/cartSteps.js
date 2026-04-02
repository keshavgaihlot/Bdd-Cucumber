const { createBdd } = require('playwright-bdd');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

const { Given, When, Then } = createBdd();

let loginPage, homePage;

When('I add a product to cart', async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.selectProduct();
  await homePage.addToCartProduct();
  await homePage.goToCart();
});

Then('product should be added to cart', async () => {
  await homePage.verifyCart();
});
