const { createBdd } = require('playwright-bdd');
const LoginPage = require('../pages/LoginPage');

const { Given, When, Then } = createBdd();

let loginPage;

Given('I open Demoblaze website', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('I click on Login button', async () => {
  await loginPage.clickLogin();
});

When('I login with username {string} and password {string}', async ({}, u, p) => {
  await loginPage.login(u, p);
});

Then('I should see logout button', async () => {
  await loginPage.verifyLogin();
});