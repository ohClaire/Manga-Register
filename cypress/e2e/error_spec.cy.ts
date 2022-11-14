describe('Error page user flows', () => {
  it('Should show user a message when there is a server error', () => {
    cy.intercept('https://api.mangadex.org/**', {
      forceNetworkError: true,
    });
    cy.visit('http://localhost:3000/');
    cy.get('.app-title').contains('Manga Register');
    cy.get('.nav-container').should('be.visible');
    cy.get('[href="/"]').should('have.class', 'active');
    cy.get('.active').contains('Browse');
    cy.get('[href="/bookmarks"]').contains('Bookmarks');
    cy.get('.home-title').contains(
      'Browse for the best manga and bookmark your favorites'
    );
    cy.get('.error-message > h2').contains('Server cannot be reached');
  });
  it('Should show user a message when page cannot be found', () => {
    cy.intercept('https://api.mangadex.org/**', {
      fixture: 'manga-stub.json',
    });
    cy.visit('http://localhost:3000/random');
    cy.get('h2').contains('Oops! Page Not Found.');
  });
});
