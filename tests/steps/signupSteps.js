const { createBdd } = require('playwright-bdd');
const SignupPage = require('../pages/SignupPage');

const { Given, When, Then } = createBdd();

let signupPage;

When('I click on Sign up button', async ({ page }) => {
  signupPage = new SignupPage(page);
  await signupPage.clickSignup();
});

When('I register with username {string} and password {string}', async ({}, u, p) => {
  await signupPage.handleDialog('Sign up successful.');
  await signupPage.register(u, p);
  await signupPage.submit();
});

Then('I should see signup success message', async () => {
  // handled in dialog
});