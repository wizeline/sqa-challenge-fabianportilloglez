import app from '../../fixtures/appSelectors.json';

class AppPage {
    
    static clickOnCreateNewTask() {
        cy.get(app.createNewTaskButton).click( {force: true} )
      }

    static selectDueDate() {
        if(cy.get(app.dueDateSelector).contains("Today")){
            cy.contains('button', 'Add task').click({ force: true })
        }
        else{
          cy.get(app.dueDateSelector).click()
          cy.get(app.optionOfTodaySelector).click()
        }
    }
      
    static clickOnAddTask() {
        cy.get(app.addTaskButton).click( {force: true} )
    }
    
    static validateTaskWasCreated() {
        cy.get(app.viewOfTodayAgenda).click({ force: true })
    }

    static writeNameOfTask(taskName) {
        cy.get(app.titleTaskTextbox).type(taskName)
    }

     static deleteTask() {
        cy.contains('Finish the SQA Challenge').rightclick()
        cy.contains('Delete task').click()
        cy.contains('Delete').click()
        cy.log('task has been deleted')
    } 

    //Multiple task
    static typeMultiTaskName(Number) {
        for (let i = 1; i <= Number; i++) {
            AppPage.clickOnCreateNewTask()
            cy.get(app.titleTaskTextbox).type("test task " + i);
            AppPage.selectDueDate()
            AppPage.clickOnAddTask()
        }
  }

    static validateMultiTaskToday() {
        cy.get(app.viewOfTodayAgenda)
    }

/*     static deleteMultiTasks(task) {
        cy.get(app.goToInboxButton).click()
        cy.get(app.viewOfInboxAgenda)
    } */

}

export default AppPage;