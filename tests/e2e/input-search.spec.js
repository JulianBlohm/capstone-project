/// <reference types="cypress" />

describe('input search', () => {
    it('should display all mainpage components', () => {
        cy.visit('/')
        cy.get('form').within(() => {
            cy.get('input[placeholder="Ort oder PLZ eingeben..."]')
            cy.get('button').should('be.disabled')
        })
    })

    it('should show "clear input" button if user types', () => {
        cy.get('input[placeholder="Ort oder PLZ eingeben..."]').type(
            'nbjehshsfewuf'
        )
        cy.get('form button[type="button"]')
    })

    it('should delete user input if cross is clicked', () => {
        cy.get('form button[type="button"]').click()
        cy.get('input[placeholder="Ort oder PLZ eingeben..."]').should(
            'have.value',
            ''
        )
    })

    it('should show error message if input invalid', () => {
        cy.get('form').within(() => {
            cy.get('input[placeholder="Ort oder PLZ eingeben..."]').type('A')
            cy.get('button:last').click()
            cy.get('input[placeholder="Ort oder PLZ eingeben..."]').should(
                'have.value',
                'A'
            )
            cy.get('span')
        })
    })

    it('should search with submit and show result page', () => {
        cy.get('form').within(() => {
            cy.get('input[placeholder="Ort oder PLZ eingeben..."]').type('chen')
            cy.get('button:last').click()
            cy.url().should('include', '/s/rosenheim')
        })
    })

    it('should link back to main page if new search button is clicked', () => {
        cy.get('button').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('should show error page if there is no result for the input', () => {
        cy.get('form').within(() => {
            cy.get('input[placeholder="Ort oder PLZ eingeben..."]').type(
                'djskdushgewiehkb'
            )
            cy.get('button:last').click()
            cy.url().should('include', '/error')
        })
    })

    it('should link to main page if new search button is clicked', () => {
        cy.get('button').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
})
