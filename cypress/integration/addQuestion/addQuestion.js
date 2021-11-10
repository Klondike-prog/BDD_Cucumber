
const newQuestionButton=".p-button";
const container=".question-container div";
const areatxt=".p-inputtextarea";



class AddQuestion {
    static createQuestion() {
        cy.wait(3000)

        cy.get(".stage").contains("Hi I am a new stage").click()
        cy.get(".stage-editor-header").contains("Hi I am a new stage")
        cy.get(newQuestionButton).contains("New Question").click()

    }
    static fillDataQuestion() {
        cy.contains(container, "Question:").find(areatxt).clear().type("I am a NORMAL Question", {
            delay: 100
        })
        
        cy.contains(container, "Answer template:").find(areatxt).clear().type("I am a NORMAL Answer", {
            delay: 100
        })
        cy.contains(container, "Solution:").find(areatxt).clear().type("I am a NORMAL solution", {
            delay: 100
        })
    }
    static saveQuestion() {
        cy.get(newQuestionButton).contains("Update Question").click()

    }
    static validateQuestion() {
        cy.get(newQuestionButton).contains("Delete Question").should("be.visible")
    }
}
export default AddQuestion