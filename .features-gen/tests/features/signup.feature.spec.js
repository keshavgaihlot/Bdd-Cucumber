// Generated from: tests\features\signup.feature
import { test } from "playwright-bdd";

test.describe('Signup functionality', () => {

  test('Successful signup', async ({ Given, When, Then, And, page }) => { 
    await Given('I open Demoblaze website', null, { page }); 
    await When('I click on Sign up button', null, { page }); 
    await And('I register with username "user12345" and password "pass123"'); 
    await Then('I should see signup success message'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\signup.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open Demoblaze website","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on Sign up button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I register with username \"user12345\" and password \"pass123\"","stepMatchArguments":[{"group":{"start":25,"value":"\"user12345\"","children":[{"start":26,"value":"user12345","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"pass123\"","children":[{"start":51,"value":"pass123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see signup success message","stepMatchArguments":[]}]},
]; // bdd-data-end