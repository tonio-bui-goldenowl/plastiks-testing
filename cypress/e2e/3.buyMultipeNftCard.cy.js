describe('BuySingleNFTwithCard', () => {
    it('buyMultipleNFT', () => {
        cy.viewport(1920,1080)
        cy.visit({url: 'https://stage-app.plastiks.io/', failOnStatusCode: false});
        // cy.wait(10000);
        // cy.contains('Log in').click();
        // cy.wait(1000);
        // cy.get('#connect-wallet-trigger > div').click();
        // cy.get("#connect-wallet__connect-wallet > div > div > a:nth-child(2) > div").click();
        // cy.wait(5000);
        // cy.acceptMetamaskAccess().should("be.true");
        // cy.wait(10000);
        // cy.get('span').should('have.class', 'curBalance')
        // cy.log('login ');

        cy.wait(3000);
        //cy.get(".collections-buy-button").click()
        cy.visit({url:'https://stage-app.plastiks.io/nft/search?tab=arts'});
        cy.wait(3000)   
        cy.get('.collections-buy-button').first().click()
        cy.wait(3000)

        cy.get('.checkout-trigger-validation').click()
        cy.wait(3000)
        //Input card
        cy.get('#stripe-card-holder').type("Test")



        
        // const STRIPE_IFRAME_PREFIX = '__privateStripeFrame'

        // const CARD_DETAILS = {
        // cardNumber: '4000058260000005',
        // cardExpiry: '0525',
        // cardCvc: '123',
        // }

        // const getStripeIFrameDocument = () => {
        //     return cy.checkElementExists(`iframe[name^="${STRIPE_IFRAME_PREFIX}"]`).iframeCustom()
        // }

        // getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardNumber"]').type(CARD_DETAILS.cardNumber)
        // getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardExpiry"]').type(CARD_DETAILS.cardExpiry)
        // getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardCvc"]').type(CARD_DETAILS.cardCvc)


        // cy.getIframe('#stripe-exp-element > .__PrivateStripeElement > iframe').click().type('0921')
        
        // cy.getIframe('CardNumberField-input-wrapper').click({ force: true }).type('4242 4242 4242 4242')


//         const STRIPE_IFRAME_PREFIX = '__privateStripeFrame'

//         const CARD_DETAILS = {
//         cardNumber: '4000058260000005',
//         cardExpiry: '0525',
//         cardCvc: '123',
// }

//         const getStripeIFrameDocument = () => {
//         return cy.checkElementExists(`iframe[name^="${STRIPE_IFRAME_PREFIX}"]`).iframeCustom()
//         }

//         getStripeIFrameDocument().find('CardNumberField-input-wrapper').type(CARD_DETAILS.cardNumber)
//         getStripeIFrameDocument().get('input[data-elements-stable-field-name="cardExpiry"]').type(CARD_DETAILS.cardExpiry)
//         getStripeIFrameDocument().get('input[data-elements-stable-field-name="cardCvc"]').type(CARD_DETAILS.cardCvc)

        // function getStripeField({iframeSelector, fieldSelector}, attempts = 0) {
        //     Cypress.log({displayName: 'getCardField', message: `${fieldSelector}: ${attempts}`})
          
        //     if (attempts > 50) throw new Error('too many attempts')
          
        //     return cy.get(iframeSelector, {timeout:10_000, log:false})
        //       .eq(0, {log:false})
        //       .its('0.contentDocument.body', {log:false}) 
        //       .find('body', {log:false})
        //       .then(body => {
        //         const stripeField = body.find(fieldSelector)
        //         if (!stripeField.length) {
        //           return cy.wait(300, {log:false})
        //             .then(() => {
        //               getStripeField({iframeSelector, fieldSelector}, ++attempts)
        //             })
        //         } else {
        //           return cy.wrap(stripeField)
        //         }
        //       })
        //   }

        // getStripeField({
        //     iframeSelector: 'iframe[title="Secure card number input frame"]', 
        //     fieldSelector: 'div.CardNumberField-input-wrapper'
        //   })
        //   .type('4242424242424242')
          
        //   getStripeField({
        //     iframeSelector: 'iframe[title="Secure card number input frame"]', 
        //     fieldSelector: 'div.CardNumberField-input-wrapper input'
        //   })
        //   .should('have.value', '4242 4242 4242 4242')
          
        //   getStripeField({
        //     iframeSelector: '[title="Secure expiration date input frame"]', 
        //     fieldSelector: '[name="exp-date"]'
        //   })
        //   .type('0323')
          
        //   getStripeField({
        //     iframeSelector: '[title="Secure expiration date input frame"]', 
        //     fieldSelector: '[name="exp-date"]'
        //   })
        //   .should('have.value', '03 / 23')

        // function getCardField(selector, attempts = 0) {
        //     Cypress.log({displayName: 'getCardField', message: `${selector}: ${attempts}`})
            
        //     if (attempts > 50) throw new Error('too many attempts')
          
        //     return cy.get('iframe', {timeout:10_000, log:false})
        //       .eq(1, {log:false})
        //       .its('0.contentWindow.window.document', {log:false}) 
        //       .find('body', {log:false})
        //       .then(body => {
        //         const cardField = body.find(selector)
        //         if (!cardField.length) {
        //           return cy.wait(300, {log:false})
        //             .then(() => {
        //               getCardField(selector, ++attempts)
        //             })
        //         } else {
        //           return cy.wrap(cardField)
        //         }
        //       })
        //   }
          
        //   getCardField('div.CardField')
        //     .type('4242424242424242')
          
        //   getCardField('div.CardField')
        //     .find('input').eq(0)
        //     .should('have.value', '4242 4242 4242 4242')

        // cy.get('iframe[name^="__privateStripeFrame"]').then($iframe => {
        //     const $body = $iframe.contents().find('body')
        //     cy.wrap($body)
        //       .find('input[name="cardnumber"]')
        //       .type('4242')
        //       .type('4242')
        //       .type('4242')
        //       .type('4242')
        //     })
        
        // cy.get('.__PrivateStripeElement iframe').then(($iframe) => {
        //     const $body = $iframe.contents().find('body')
        //     cy.wrap($iframe.contents()[0].body)
        //       .find('input[name="cardnumber"]')
        //       .type('4242 4242 4242 4242')
        //     cy.wrap($iframe.contents()[1].body)
        //       .find('input[name=exp-date]')
        //       .type('1230')
        //     cy.wrap($iframe.contents()[2].body)
        //       .find('input[name=cvc]')
        //       .type('123')
        //   })

        // cy.get('.__PrivateStripeElement iframe').then(function($iframe) {
        //     const $body = $iframe.contents().find('body')
        //     cy
        //       .wrap($body)
        //       .find('input[autocomplete="cc-number"]')
        //       .type('4242424242424242', { force: true })
        //     cy
        //       .wrap($body)
        //       .find('input[autocomplete="cc-exp"]')
        //       .type('03/30', { force: true })
        //     cy
        //       .wrap($body)
        //       .find('input[autocomplete="cc-csc"]')
        //       .type('737', { force: true })
        //     cy
        //       .wrap($body)
        //       .find('input[autocomplete="postal-code"]')
        //       .type('12345', { force: true })
        // })
        
    })
})


