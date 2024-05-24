Feature: to validate login functionality of instagram application

Scenario: to validate emailField and password field

Given to launch the edge browser and hit url
When to pass the valid emailId in emailField
And to pass the invalid password in passwordField
And to click the login button
Then to close  edge browser

Scenario Outline: To validate emailField,passwordfield positive and negative testcase

Given  launch the edge browser and hit url
When  pass the valid in "<emailfield>" emailField
And   pass the value in "<password field>" passwordField
And  click the login button
Then  close the edge browser

Examples: 
|emailfield|password field|
|bala@gmail.com|bala|
|dini@gmail.com|dini|
|subhu@gmail.com|subhu|
|sathya@gmail.com|sathya|
|thanjai@gmail.com|thanjai|


