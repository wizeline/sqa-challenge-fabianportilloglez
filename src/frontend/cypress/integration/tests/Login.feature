Feature: Test login 

  As a user
  I want to log in application
  so that user is logged when fill valid username and password 

  Background: 
    Given user is in login page

  @focus
  Scenario: Successful login 
    When user fill username "fabian.portillo@wizeline.com"
      And user fill password "Shadowops_1"
      And clicks on log in button
    Then user is in App page

# Negative scenarios - Failed login  
  Scenario: Valid username but invalid password
    When user fill username "fabian.portillo@wizeline.com"
      And user fill password "knlknkln"
      And clicks on log in button
    Then error message for wrong email or password is displayed "Wrong email or password."

  Scenario: Invalid username but valid password
    When user fill username "fabian.portilldd@wizeline.com"
      And user fill password "Shadowops_1"
      And clicks on log in button
    Then error message for wrong email or password is displayed "Wrong email or password."

  Scenario: Empty username but valid password
    When user fill username " "
      And user fill password "Shadowops_1"
      And clicks on log in button
    Then error message for empty email is displayed "Please enter a valid email address."

  Scenario: Valid username but empty password
    When user fill username "fabian.portillo@wizeline.com"
      And clicks on log in button
    Then error message for empty password is displayed "Passwords must be at least 8 characters long."
  @focus
  Scenario Outline: Exceed number of tries for failed login
    When user fill username "fabian.portillo@wizeline.com"
      And user fill password "<Passwords>"
      And clicks on log in button
    Then error message for exceed number of tries is displayed "Too many login attempts. Try again later."
    Examples:
        | Passwords | 
        | password1 | 
        | password2 | 
        | password3 | 
        | password4 | 
        | password5 | 
        | password6 | 
        | password7 | 
        | password8 | 
        | password9 | 
        | password10 | 
        