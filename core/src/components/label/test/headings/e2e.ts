describe('label: headings', () => {
  beforeEach(() => {
    cy.visit('components/label/test/headings?ionic:_testing=true');
  })

  it('should render', () => {
    cy.get('ion-label').should('have.class', 'hydrated');

    // cy.screenshot();
  });
});
