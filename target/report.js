$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/facebook.feature");
formatter.feature({
  "name": "to validate login functionality of instagram application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "to validate emailField and password field",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "to launch the edge browser and hit url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStep.to_launch_the_edge_browser_and_hit_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to pass the valid emailId in emailField",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookStep.to_pass_the_valid_emailId_in_emailField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to pass the invalid password in passwordField",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep.to_pass_the_invalid_password_in_passwordField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to close  edge browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStep.to_close_edge_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate emailField,passwordfield positive and negative testcase",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the edge browser and hit url",
  "keyword": "Given "
});
formatter.step({
  "name": "pass the valid in \"\u003cemailfield\u003e\" emailField",
  "keyword": "When "
});
formatter.step({
  "name": "pass the value in \"\u003cpassword field\u003e\" passwordField",
  "keyword": "And "
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "close the edge browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailfield",
        "password field"
      ]
    },
    {
      "cells": [
        "bala@gmail.com",
        "bala"
      ]
    },
    {
      "cells": [
        "dini@gmail.com",
        "dini"
      ]
    },
    {
      "cells": [
        "subhu@gmail.com",
        "subhu"
      ]
    },
    {
      "cells": [
        "sathya@gmail.com",
        "sathya"
      ]
    },
    {
      "cells": [
        "thanjai@gmail.com",
        "thanjai"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate emailField,passwordfield positive and negative testcase",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the edge browser and hit url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStep2Dry.launch_the_edge_browser_and_hit_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the valid in \"bala@gmail.com\" emailField",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookStep2Dry.pass_the_valid_in_emailField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the value in \"bala\" passwordField",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep2Dry.pass_the_value_in_passwordField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep2Dry.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the edge browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStep2Dry.close_the_edge_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate emailField,passwordfield positive and negative testcase",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the edge browser and hit url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStep2Dry.launch_the_edge_browser_and_hit_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the valid in \"dini@gmail.com\" emailField",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookStep2Dry.pass_the_valid_in_emailField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the value in \"dini\" passwordField",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep2Dry.pass_the_value_in_passwordField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep2Dry.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the edge browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStep2Dry.close_the_edge_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate emailField,passwordfield positive and negative testcase",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the edge browser and hit url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStep2Dry.launch_the_edge_browser_and_hit_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the valid in \"subhu@gmail.com\" emailField",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookStep2Dry.pass_the_valid_in_emailField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the value in \"subhu\" passwordField",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep2Dry.pass_the_value_in_passwordField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep2Dry.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the edge browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStep2Dry.close_the_edge_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate emailField,passwordfield positive and negative testcase",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the edge browser and hit url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStep2Dry.launch_the_edge_browser_and_hit_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the valid in \"sathya@gmail.com\" emailField",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookStep2Dry.pass_the_valid_in_emailField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the value in \"sathya\" passwordField",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep2Dry.pass_the_value_in_passwordField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep2Dry.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the edge browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStep2Dry.close_the_edge_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate emailField,passwordfield positive and negative testcase",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the edge browser and hit url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStep2Dry.launch_the_edge_browser_and_hit_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the valid in \"thanjai@gmail.com\" emailField",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookStep2Dry.pass_the_valid_in_emailField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the value in \"thanjai\" passwordField",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep2Dry.pass_the_value_in_passwordField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStep2Dry.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the edge browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStep2Dry.close_the_edge_browser()"
});
formatter.result({
  "status": "passed"
});
});