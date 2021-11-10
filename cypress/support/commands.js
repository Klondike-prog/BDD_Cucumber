Cypress.Commands.add("login", () => {

    cy.fixture("loginCredentials").then((credentials) => {

        window.localStorage.setItem(

            credentials.key,

            JSON.stringify(credentials.value)

        );

    });

});

//"login" - numele comenzii pe care am creat-o

// "loginCredentials" - numele fisierului in care ne-am salvat session id details