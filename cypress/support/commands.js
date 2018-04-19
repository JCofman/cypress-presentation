// https://github.com/kentcdodds/cypress-testing-library
import "cypress-testing-library/add-commands";
import { register } from "cypress-match-screenshot";
register();
Cypress.Commands.add("getByTestId", id => cy.get(`[data-testid="${id}"]`));

Cypress.on("window:before:load", win => {
  // need to do that since fetch requests doesn't get recognized see stackoverflow error -> https://stackoverflow.com/questions/47534846/cypress-xhr-stubbing-ignores-ajax-requests-performed-with-fetch
  win.fetch = null;

  // service worker workaround since otherwise any fetch requests get cached
  const promise = new Promise(resolve => {});
  return (win.navigator.serviceWorker.register = function() {
    return promise;
  });
});
