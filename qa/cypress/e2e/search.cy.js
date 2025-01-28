beforeEach(() => {
  cy.visit("/");
});

it('Fail when searching for "Hoodie"', () => {
  //Search for Hoodie
  cy.get('[class="icon icon-search"]').eq(1).click({ force: true });
  cy.get('[id="Search-In-Modal"]').type("Hoodie");
  //Failure assertion
  cy.get("#predictive-search-results-groups-wrapper").should(
    "not.contain",
    "Hoodie"
  );
});

it('Pass when searching for "Hoodie"', () => {
  //Search for Hoodie
  cy.get('[class="icon icon-search"]').eq(1).click({ force: true });
  cy.get('[id="Search-In-Modal"]').type("Hoodie");
  //Pass assertion
  cy.get("#predictive-search-results-groups-wrapper").should(
    "contain",
    "Hoodie"
  );
});
