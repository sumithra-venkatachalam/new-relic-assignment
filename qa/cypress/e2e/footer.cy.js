describe('Footer Navigation Check', () => {
    it("Verifying Footer Links", () => {
        cy.visit("https://weratedogs.com/");
        cy.checkLinks("footer a");
    });
});