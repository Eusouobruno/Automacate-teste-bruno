import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de produtos", () => {
  cy.visit("https://www.automationexercise.com/products");
});

When("adiciono um item ao carrinho", () => {
  cy.contains("View Product").first().click();
  cy.contains("Add to cart").click();
  cy.contains("View Cart").click();
});

Then("o produto deve ser exibido no carrinho", () => {
  cy.get("#cart_info").should("be.visible");
});
