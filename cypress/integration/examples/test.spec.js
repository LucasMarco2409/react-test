context('Cookies', () => {
    it('cy.spy() retries until assertions pass', () => {
    
      cy.visit('http://localhost:3000/')
      cy.get('.btn.btn-primary').first()
      .should('have.text', 'PAWFECT')
      cy.get('.btn.btn-primary').first().click()
      
    })})