/// <reference types="cypress" />

describe('main-page', () => {
    it('should open the main page by first load', () => {
        cy.visit('/')
    })

    it('should display all main page components', () => {
        cy.get('svg')
        cy.get('h1')
        cy.get('h2')
        cy.get('form').within(() => {
            cy.get('input[placeholder="Ort oder PLZ eingeben..."]')
            cy.get('button').should('be.disabled')
        })
        cy.get('button[type=button]')
        cy.get('h3')
        cy.get('li').should('have.length', 8)
    })

    it('should show answers of each FAQ question if its clicked', () => {
        cy.get('ul>li').each(($el) => {
            cy.wrap($el).click()
        })
    })

    it('should hide answers of each FAQ question if its clicked again', () => {
        cy.get('ul>li').each(($el) => {
            cy.wrap($el).click('top')
        })
    })
})
