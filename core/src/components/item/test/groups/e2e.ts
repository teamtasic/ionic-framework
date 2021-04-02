describe('item: groups', () => {
  beforeEach(() => {
    cy.visit('components/item/test/groups?ionic:_testing=true');
  })

  it('should render', () => {
    cy.get('ion-item').should('have.class', 'hydrated');

    // cy.screenshot();
  });
});
