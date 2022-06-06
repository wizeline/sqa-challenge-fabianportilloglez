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

And ('user click on add task button', () => {
    AppPage.clickOnAddTask();
});

Then ('the added task should be visible', () => {
    AppPage.validateTaskWasCreated();
});

And ('task is moved to inbox', () => {
    AppPage.validateTaskSentToInbox()
})

