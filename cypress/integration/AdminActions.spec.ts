import cy from "cypress";
describe("App", () => {
  it("cy.get() - query DOM elements", () => {
    cy.visit("http://localhost:3000");
    cy.get("#app .Title").contains("Route");
  });
});
