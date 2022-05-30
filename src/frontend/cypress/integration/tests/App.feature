Feature: Test add tasks 

  As a user
  I want to add tasks in app page
  so that tasks are shown once are added

  Background: 
    Given user is logged in
    Then user is in App page

# Tasks - Success tests
  Scenario: Create a new task and validate it was created correctly
    When user click on Add task button
      And user write some name for the task 'Finish the SQA Challenge'
      And user select the due date for today
      And user click on Add task button
    Then the added task should be visible
      And task is moved to inbox

  Scenario: Create 10 new tasks and validate they were created correctly
    When user add multiple tasks
    Then the multiple tasks added should be visible