Feature: Test login 

  As a user
  I want to log in todoist website application
  so that user is logged when fill valid username and valid password 

  Background: 
    Given user is in login page

  Scenario: Successful login 
    When user fill username
      And user fill password 
      And clicks on log in button
    Then user is in App page

# Negative scenarios
  Scenario Outline: Invalid username or invalid password.
    When user fill username "<User>"
      And user fill password "<Password>"
      And clicks on log in button
    Then user see the message "<Message>"

      Examples:
        | User                          | Password      | Message |
        | fabian.portillo@wizeline.com  | WrongPassword | Wrong email or password. |
        | InvalidUser@wizeline.com      | WrongPassword | Wrong email or password. |
        | InvalidUser2@wizeline.com     | {enter}       | Passwords must be at least 8 characters long. |

  Scenario Outline: Exceed number of tries for failed login
    When user fill username "<User>"
      And user fill password "<Password>"
      And clicks on log in button
    Then user see the message "Too many login attempts. Try again later."

      Examples:
        | User                        | Password    |
        | InvalidUser1@wizeline.com   | wrongPassw1 |
        | InvalidUser2@wizeline.com   | wrongPassw2 |
        | InvalidUser3@wizeline.com   | wrongPassw3 |
        | InvalidUser4@wizeline.com   | wrongPassw4 |
        | InvalidUser5@wizeline.com   | wrongPassw5 |
        | InvalidUser6@wizeline.com   | wrongPassw6 |
        | InvalidUser7@wizeline.com   | wrongPassw7 |