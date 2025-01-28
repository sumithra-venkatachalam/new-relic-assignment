describe('Footer Navigation Check', () => {
    it("Verifying Footer Links", () => {
        cy.visit("https://weratedogs.com/");
        //Resusable component called
        cy.checkLinks("footer a");
    });
});


