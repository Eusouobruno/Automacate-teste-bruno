import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que a API está disponível", () => {
});

When("realizo uma busca por tablet", () => {
  cy.request(
    "GET",
    "https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=tablet"
  ).then((res) => {
    response = res;
  });
});

Then("o retorno deve ser 200", () => {
  expect(response.status).to.eq(200);
});

Then("a categoria retornada deve ser TABLETS", () => {
  expect(response.body[0].categoryName).to.eq("TABLETS");
});
