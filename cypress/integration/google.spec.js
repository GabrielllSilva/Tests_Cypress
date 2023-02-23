/// <reference types="cypress" />

describe('example to-do app', () => {
    /*beforeEach(() => {      
      
    })*/
  
    it('displays two todo items by default', () => {
      cy.visit('https://www.google.com/')
      cy.get('#L2AGLb > .QS5gu').click()
  
      // We can go even further and check that the default todos each contain
      // the correct text. We use the `first` and `last` functions
      // to get just the first and last matched elements individually,
      // and then perform an assertion with `should`.
      //cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
      //cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    })
})