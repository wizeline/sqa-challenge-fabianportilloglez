import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../pages/LoginPage';
import AppPage from '../../pages/AppPage';

Given('user is logged in', () => {
    LoginPage.login();
})

Then('user is in App page', () => {
    LoginPage.visitApp();
})

When ('user click on Add task button',() => {
    AppPage.addTask();
});

And ('user write some name for the task {string}', (taskName) => {
    AppPage.writeNameOfTask(taskName);
});

And ('user select the due date for today', () => {
    AppPage.selectDueDate();
});

And ('user click on Add task button', () => {
    AppPage.addTask();
});

Then ('the added task should be visible', () => {
    AppPage.showTask();
});

And ('task is moved to inbox', () => {
    AppPage.moveTaskToInbox();
})

