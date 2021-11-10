const area = ".p-inputtext";
const saveButton=".p-button-label";
const newStageButton=".p-button.p-component.rnd-btn";



class AddStage {
    static createStage() {
        cy.wait(2000)
        cy.get(newStageButton).contains("New Stage").click()

    }
    static fillDataStage() {
        cy.wait(2000)
        cy.get(area).eq(1).clear()
        cy.get(area).eq(1).type("Hi I am a new stage", {
            delay: 100
        });
        cy.get(area).eq(2).clear()
        cy.get(area).eq(2).type("100", {
            delay: 100
        })
    }
    static saveStage() {
        cy.get(saveButton).contains("Save").click()

    }
    static validateStage() {
        cy.wait(3000)
        cy.get(".stage").contains("(100p) Hi I am a new stage")
        cy.get(".stage-selector").its("length").should("eq", 1)
    }
}
export default AddStage