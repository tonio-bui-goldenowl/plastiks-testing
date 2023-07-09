describe('Test buy nft', () => {
    it('Connects with Metamask', () => {
        cy.visit({url: 'https://stage-app.plastiks.io', failOnStatusCode: false});
        cy.wait(5000);
        cy.contains('Log in').click();
        cy.wait(5000);
        cy.get('#connect-wallet-trigger > div').click();
        cy.get("#connect-wallet__connect-wallet > div > div > a:nth-child(2) > div").click();
        cy.wait(10000);
        cy.acceptMetamaskAccess().should("be.true");
        cy.wait(10000);
        cy.get('span').should('have.class', 'curBalance')
        cy.log('login ');
    })

    it('Buy single nft', () => {
        cy.visit({url: 'https://stage-app.plastiks.io', failOnStatusCode: false});
        cy.get('body > header > div.container.d-none.d-md-flex > div.header__content > ul > li:nth-child(3) > a').click()
        cy.wait(500);
        cy.contains('Explore').click();
        cy.wait(5000);
        cy.contains('Buy Now').click();
        cy.wait(5000);
    })
})