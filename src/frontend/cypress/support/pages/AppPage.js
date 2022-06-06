import app from '../../fixtures/appSelectors.json';

class AppPage {
    
    static clickOnCreateNewTask() {
        cy.get(app.createNewTaskButton).click( {force: true} )
      }

    static selectDueDate() {
        if(cy.get(app.dueDateSelector).contains('Today')){
            cy.get(app.dueDateSelector).click()
            cy.get(app.optionOfTodaySelector).click()
        } 
    }
      
    static clickOnAddTask() {
        cy.contains('Add task').click({ force: true })
        //cy.get(app.addTaskButton).click( {force: true} )
    }
    
    static validateTaskWasCreated() {
        cy.get(app.viewOfTodayAgenda).click({ force: true })
    }

    // Single task
    static writeNameOfTask(taskName) {
        cy.get(app.titleTaskTextbox).type(taskName)
    }

    static validateTaskSentToInbox() {
        cy.get(app.goToInboxButton).click({ force: true })
        cy.get(app.viewOfInboxAgenda)
    }

    // multiple tasks 
    static addMultipleTasks() {

    }

    static showMultipleTasks() {

    }

}

export default AppPage;