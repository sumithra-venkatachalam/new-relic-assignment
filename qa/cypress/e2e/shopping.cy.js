it("Adding Items to the Cart", () => {
  //Declaring the product specifications
  let product = "Classic Tee - Black";
  let size = "Large";
  let quantity = 5;
  cy.visit("/");
  //Searching Product
  cy.get('[class="icon icon-search"]').eq(1).click({ force: true });
  cy.get('[id="Search-In-Modal"]').type(product);
  cy.get("#predictive-search-results-groups-wrapper")
    .should("contain", product)
    .click();
  //Choosing Size & Quantity
  cy.get("h1")
    .should("contain", product)
    .click();
  cy.get("label").contains(size).click({ force: true });
  for (let add = 1; add <= quantity; add++)
    cy.get('[class="quantity__button"]').eq(-1).click();
  cy.get("button").contains("Add to cart").click({ force: true });
  //No Thanks popup getting displayed thrice, when viewing cart in this website
  cy.contains("No Thanks").click();
  cy.contains("No Thanks").click();
  cy.contains("No Thanks").click();
  //Checking whether added in cart
  cy.get(".upcart-product-title-link ").should("have.text", product);
  cy.get('[class="upcart-item-option-value"]').should("have.text", size);
});
