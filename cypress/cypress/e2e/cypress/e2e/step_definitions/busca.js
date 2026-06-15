import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de produtos", () => {
  cy.visit("https://www.automationexercise.com/products");
});

When("pesquiso por {string}", (produto) => {
  cy.get("#search_product").type(produto);
  cy.get("#submit_search").click();
});

Then("o produto deve aparecer na listagem", () => {
  cy.contains("Blue Top").should("be.visible");
});
