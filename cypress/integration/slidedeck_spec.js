describe("Slidedeck", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/#/11");
    cy.getByTestId("githubButton").as("githubButton");
  });

  describe("Intergration", () => {
    it(".should() display github user", () => {
      cy.route("GET", "/orgs/inovex/**", "fixture:github");
      cy.get("@githubButton").click();
      cy.get(".member__avatar");
    });
    // ERROR CASE
    it(".should() display super dupper awesome error message", () => {
      const errorMessage =
        "Wir konnten den Request leider nicht verarbeiten. Sie haben zu viele Mitglieder in Ihrer Organisation";
      cy.route({
        method: "GET", // Route all GET requests
        url: "https://api.github.com/orgs/inovex/members",
        response: {
          message: errorMessage
        },
        status: 500
      });
      // https://on.cypress.io/visit
      cy.get("@githubButton").click();
      cy.getByText(errorMessage);
    });
  });

  describe("e2e", () => {
    it(".should() display inovex github user", () => {
      cy.route("GET", "/orgs/inovex/**").as("githubRequest");
      cy.get("@githubButton").click();
      cy.wait("@githubRequest");
      cy.get(".member__avatar");
    });
  });
});
