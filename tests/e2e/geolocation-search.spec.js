/// <reference types="cypress" />

describe('geolocation', () => {
    it('should open the main page and show geolocation button', () => {
        cy.visit('/')
        cy.get('button[type="button"]')
    })

    it('should show result page after button is clicked', () => {
        cy.get('button[type="button"]').click()
        cy.wait(3000).url().should('include', '/s/')
    })
})
