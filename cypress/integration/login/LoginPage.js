const URL = "https://accesa-internship-portal.web.app/"
class LoginPage {
    static visitPage() {

        cy.visit(URL)
    }
    static LogIn() {
        cy.login()
    }
    static validateProject() {
        cy.get("h4").contains("Bondane_Catalin_Test").should("be.visible")
    }
    static loadProject() {
        cy.wait(3000)
        cy.get(".p-button").contains("Start Now").click()
    }

}
export default LoginPage
