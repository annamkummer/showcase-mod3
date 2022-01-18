describe('Search page user flow', () => {
    
    beforeEach(() => {
        cy.visit('localhost:3000')
    })
    
    it('When the user visits the home page, the title of the site should be displayed in the header.', () => {
        cy.visit('localhost:3000')
        cy.get('.title').contains('University Search')
    })
    
    it('When a user visits the home page, they should be able to select a state from a drop-down.', () => {
        cy.get('.states').click()
        cy.get('.states__select').children().children().should('have.length', 50)
        cy.get('.states__row').first().next().next().next().next().next().click()
        cy.get('.states__input').should('have.value', 'Colorado')
    })
  
    it('When a user visits the home page, they should be able to select student body size.', () => {
        cy.get('.checkbox').should('have.length', 3)
        cy.get('.medium').click()
    })

    it('When the user clicks View Schools, they should be taken to the /results page.', () => {
        cy.get('.submit-btn').click()
        cy.url().should('include', 'results')
    })

    it('When the user clicks the bookmark icon, they should be taken to the /saved page.', () => {
        cy.get('.view-saved-btn').click()
        cy.url().should('include', 'saved')
    })
})