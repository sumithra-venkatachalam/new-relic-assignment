//describe("Header Navigation Links", () => {
//   beforeEach(() => {
//     cy.visit("/");
//   });

//   const HeaderInput = require("../fixtures/header.json");

//   HeaderInput.forEach((headerCase) => {
//     it(headerCase.testcasename, () => {
//       if (headerCase.navigate_from)
//         cy.get(".header__menu-item").contains(headerCase.navigate_from).click();
//       cy.get(".header__menu-item").contains(headerCase.navigate_to).click();
//       cy.url().should("include", headerCase.path);
//     });
//   });
// });

describe('Header Navigation Check', () => {
    it("Verifying Header Links", () => {
        cy.visit("/");
        cy.get(".header__menu-item").should('be.visible').each(($link) => {
            const href = $link.attr('href');
            if (href && !href.startsWith('http')) {
                cy.request(href).its('status').should('eq', 200);
            }
        });
    });
});
