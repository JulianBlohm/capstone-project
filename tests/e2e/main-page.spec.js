/// <reference types="cypress" />

describe('hotspotornot', () => {
    it('should open the main page by first load', () => {
        cy.visit('/')
    })

    it('should display all mainpage components', () => {
        cy.get('form').within(() => {
            cy.get('input[placeholder="Ort oder PLZ eingeben..."]')
            cy.get('button').should('be.disabled')
        })
        cy.get('button[type=button]')
        cy.get('li').should('have.length', 8)
    })
})
