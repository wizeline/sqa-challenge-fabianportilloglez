Feature: Test add tasks 

  As a user
  I want to add tasks in app page
  so that tasks are shown once are added

  Background: 
    Given user is logged in
    Then user is in App page

  Scenario: Create a single task and validate it was created correctly
    When user click on add task button
      And user select the due date for today
      And user write some name for the task 'Finish the SQA Challenge'
      And user click on add task button to submit
    Then the added task should be visible
      And task is deleted

  Scenario Outline: Create multiple tasks in single session and validate that they have been created successfully
    When user create <Number> tasks
    Then all the <Number> tasks are created on today site

    Examples:
    | Number |
    |10|