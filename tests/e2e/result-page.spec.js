/// <reference types="cypress" />

describe('result-page', () => {
    it('should open the result page by first load', () => {
        cy.visit('/s/hamburg')
    })

    it('should display all result page components', () => {
        cy.get('svg')
        cy.get('h1')
        cy.get('h2')
        cy.get('span')
        cy.get('time')
        cy.get('button')
        cy.get('h3').should('have.length', 2)
        cy.get('h4').should('have.length', 11)
        cy.get('p').should('have.length', 13)
        cy.get('a').should('have.length', 2)
    })

    it('should have external link, opens in new tab', () => {
        cy.get('a:first')
            .should('have.prop', 'href')
            .and(
                'equal',
                'https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-bundeslaender-1745198'
            )
        cy.get('a:first').should('have.prop', 'target').and('equal', '_blank')
    })

    it('should have second external link, opens in new tab', () => {
        cy.get('a:last')
            .should('have.prop', 'href')
            .and(
                'equal',
                'https://www.bundesregierung.de/breg-de/themen/coronavirus/corona-massnahmen-1734724'
            )
        cy.get('a:first').should('have.prop', 'target').and('equal', '_blank')
    })
})
