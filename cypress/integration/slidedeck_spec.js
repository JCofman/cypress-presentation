describe("Slidedeck", function() {
  it(".should() display super dupper awesome error message", function() {
    cy.server(); // enable response stubbing
    cy.route({
      method: "GET", // Route all GET requests
      url: "https://api.github.com/orgs/inovex/members",
      response: {
        message:
          "Wir konnten den Request leider nicht verarbeiten. Sie haben zu viele Mitglieder in Ihrer Organisation"
      },
      status: 500
    });
    // https://on.cypress.io/visit
    cy.visit("/#/7");
    cy.get(".glow-button").click();
  });
});
