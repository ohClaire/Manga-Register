describe('Bookmark manga user flow', () => {
  beforeEach(() => {
    cy.intercept('https://api.mangadex.org/**', {
      statusCode: 200,
      fixture: 'manga-stub.json',
    });
    cy.visit('http://localhost:3000/');
  });

  it('Should allow user to favorite a manga when bookmark button is clicked in home page', () => {
    cy.get('.bookmark-btn__round')
      .find('img')
      .should('have.attr', 'src')
      .and(
        'equal',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAABL0lEQVRYhe3YMWvCQBTA8btERYtLwdXdpaO0ESGjyeD3cBYR+w009gP4HcTJoRW6VCSmOLgWCoXqrLg0RG3uOhSkiHqXvnPy/ed3737zIwSDRUUDpeaYnxMwaBgnDTGZJZ3KrRrNXpXOq3BGO8vPCkMgNARCQyA0BEJDIDQEQkMgNARCQyA0BEJDIDQEQrssIOOcMK72lCN1mxHFOSHTjyXvurOvkDGtnM+mCrkM1TXhbUoYCPgLW5DueOavt+G7H4Q1SmnQ8z7b/cn8ppzPXkGh/wIegg3ujec/I4bV9IoqoJGAErBdT427kQqoFDAKLApU5r3UhfU6nfCDDXtbf2+rj/XCi8ziY9mOayb02EMyrudW/iYturAKs1re0HZcE7TkQLbjmlbLG6rei+33A4XdnyAa7N/KAAAAAElFTkSuQmCC'
      );
    cy.get('.bookmark-btn__round').click();
    cy.get('.bookmark-btn__round')
      .find('img')
      .should('have.attr', 'src')
      .and(
        'equal',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAABGElEQVRYhe3YIY/CMBTA8XZhCUcwWAQSzpAgGSGZKHV8GsK3gI+DowgIGZO4jaCpxkCWjLW4y2WBa+EVde9v277+9CMEg0VNF3aM6U8CgtXqT0PFZkhvPHajKbVfLIx3vI/87DAEQkMgNARCQyA0BEJDIDQEQkMgNARCQyA0BEJDILT/BdRaE63drnKsdjM2naXUMkkuSimv2W5/NVotSqlxN2UMDDxLSWSSXIs8PxZFMaWEZKc0ncnDodvsdGpQ6NvAMiwQQvw6DuLRaOgC+jLQAPupL8TWBdQaaAt7BWrz3mrD6lerV327pblSk8FyubYZ/KyI87BC6dzz/e88y+qmDauxmLFNxHkIGvKgiPMwZmzjei5W7g5U1JaZAsovLgAAAABJRU5ErkJggg=='
      );
  });
  it('Should show change in Bookmarks page', () => {
    cy.get('.bookmark-btn__round').click();
    cy.get('[href="/bookmarks"]').click();
    cy.get('[href="/bookmarks"]').should('have.class', 'active');
    cy.get('.card-cover')
      .should('have.attr', 'alt')
      .and('equal', 'Cover of manga.title');
  });
  it('Should show change in details page', () => {
    cy.get('.bookmark-btn__round').click();
    cy.get('.card-cover').click();
    cy.get('.details')
      .find('button')
      .should('have.attr', 'class', 'active-bookmark-btn__square');
  });
});
