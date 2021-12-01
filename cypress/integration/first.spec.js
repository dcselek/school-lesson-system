/* eslint-disable no-undef */
it('login teacher user', () => {
    cy.visit("http://localhost:3000");
    cy.get("#username").type("teacher")
    cy.get("#login-button").click();
    cy.get("#students-nav-button").should("be.visible")
    cy.reload()
    cy.get("#students-nav-button").should("be.visible")
  });