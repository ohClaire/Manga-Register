import { should } from 'chai';

describe('User browse manga flow', () => {
  beforeEach(() => {
    cy.intercept('https://api.mangadex.org/**', {
      statusCode: 200,
      fixture: 'manga-stub.json',
    });
    cy.visit('http://localhost:3000/');
  });
  it('Should show loading page while fetching data', () => {
    cy.get('.loading-page').should('be.visible');
    cy.get('.loading-page > h2').contains('Loading...');
  });
  it('Should have application name of Manga Register', () => {
    cy.get('.app-title').contains('Manga Register');
  });
  it('Should have a nav bar', () => {
    cy.get('.nav-container').should('be.visible');
    cy.get('[href="/"]').should('have.class', 'active');
    cy.get('.active').contains('Browse');
    cy.get('[href="/bookmarks"]').contains('Bookmarks');
  });
  it('Should tell user what to do in this page', () => {
    cy.get('.home-title').contains(
      'Browse for the best manga and bookmark your favorites'
    );
  });
  it('Should give user a manga to bookmark', () => {
    cy.get('.home-container').should('be.visible');
    cy.get('.card-cover').should('be.visible');
    cy.get('.bookmark-btn__round > img').should('be.visible');
  });
  it('Should be able to open manga to see details', () => {
    cy.get('.card-cover').click();
    cy.get('.details').should('be.visible');
    cy.get('.details__cover-art').should('be.visible');
    cy.get('.bookmark-btn__square').contains('Bookmark');
    cy.get('h3').contains("The Lady's Dark Secret");
    cy.get('.details > :nth-child(2)').contains('Summary');
    cy.get(':nth-child(2)  > :nth-child(3)').contains('Release');
    cy.get(':nth-child(2)  > :nth-child(4)').contains('Status');
  });
});
