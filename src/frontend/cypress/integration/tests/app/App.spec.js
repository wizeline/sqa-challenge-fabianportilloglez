import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../support/pages/HomePage';
import LoginPage from '../../../support/pages/LoginPage';
import AppPage from '../../../support/pages/AppPage';

Given('user is logged in', () => {
    HomePage.visitLoginPage();
    LoginPage.login();
})

Then('user is in App page', () => {
    LoginPage.visitApp();
    cy.url().should('include', 'app/today');
    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/app/today');
    })
    cy.contains("Today").should("be.visible");
})

When ('user click on add task button',() => {
    AppPage.clickOnCreateNewTask();
});

And ('user write some name for the task {string}', (taskName) => {
    AppPage.writeNameOfTask(taskName);
});

And ('user select the due date for today', () => {
    AppPage.selectDueDate();
});

And ('user click on add task button to submit', () => {
    AppPage.clickOnAddTask();
});

Then ('the added task should be visible', () => {
    AppPage.validateTaskWasCreated()
});

And ('task is deleted', () => {
    AppPage.deleteTask()
})

/**
 * Scenario Outline: Create multiple tasks and validate that they have been created successfully
 */
And("type the name {string}{string} for the task",
    function (Name, Number) {
    AppPage.typeMultiTaskName().type(Name + Number);
  })
And('select the day as today', () => {
  AppPage.selectDueDate()
})
And('click on Add Task button', () => {
  AppPage.clickOnAddTask()
})
Then('the task {string}{string} is created on today site', (Name, Number) => {
  AppPage.validateMultiTaskToday().should('contain',Name + Number)
})
And('the task {string}{string} is created on inbox site', (Name, Number) => {
  AppPage.validateMultiTaskInbox().should('contain',Name + Number)
})

/**
 * Scenario Outline: Create multiple tasks in single session and validate that they have been created successfully
 */
When('user create {int} tasks', () => {

  })
  
  Then('all the {int} tasks are created on today site', (Number) => {
    for (let i = 1; i <= Number; i++) {
      AppPage.validateMultiTaskToday()//.should('contain',"test task " + i)
    }
  })

  And('all the {int} tasks are created on inbox site', (Number) => {
    for (let i = 1; i <= Number; i++) {
      AppPage.validateMultiTaskInbox()//.should('contain',"test task " + i)
    }
})