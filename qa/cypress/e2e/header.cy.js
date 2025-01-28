describe('Header Navigation Check', () => {
    it("Verifying Header Links", () => {
        cy.visit("/");
        cy.get(".header__menu-item").should('be.visible').each(($link) => {
            //Retrieving href  for headers and cheking it is active or not
            const href = $link.attr('href');
            if (href && !href.startsWith('http')) {
                cy.request(href).its('status').should('eq', 200);
            }
        });
    });
});
