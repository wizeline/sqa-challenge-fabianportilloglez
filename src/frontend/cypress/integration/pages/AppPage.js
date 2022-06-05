class AppPage {

    static addTask() {
        cy.contains('button', 'Add task').click();
    }

    static writeNameOfTask(taskName) {
        cy.get('.public-DraftStyleDefault-block').parent('.task_editor__editing_area')
        cy.type(taskName).click();
    }

    static selectDueDate() {
        cy.contains('button', 'Due date').click();
        cy.contains('Today').click();
    }

    static showTask() {
        cy.contains('Finish the SQA Challenge')
        .should('be.visible')
        .and('have.text', 'Finish the SQA Challenge');
    }

    static moveTaskToInbox() {
        cy.contains('Finish the SQA Challenge').click();
        cy.Inbox('Inbox').click();
    }

    static addMultipleTasks() {

    }

    static showMultipleTasks() {

    }

}

export default AppPage;