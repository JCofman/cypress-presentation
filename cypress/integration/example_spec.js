describe("Example", function() {
  it("Should match screenshot", function() {
    cy.visit("/#/");
    cy.matchScreenshot("first Screenshot");
  });
});
