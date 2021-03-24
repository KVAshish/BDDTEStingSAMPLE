$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/cucumberFramework/featureFiles/test.feature");
formatter.feature({
  "line": 1,
  "name": "Spree Application Test",
  "description": "",
  "id": "spree-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Home page Test",
  "description": "",
  "id": "spree-application-test;home-page-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": ": user Load the Application URL \"\" in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": ": user login the application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": ": verify user is succefully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "SpreeStepdef.user_Load_the_Application_URL_in_browser(String)"
});
formatter.result({
  "duration": 11239965000,
  "status": "passed"
});
formatter.match({
  "location": "SpreeStepdef.user_login_the_application()"
});
formatter.result({
  "duration": 3219956700,
  "status": "passed"
});
formatter.match({
  "location": "SpreeStepdef.verify_user_is_succefully_logged_in()"
});
formatter.result({
  "duration": 5994161700,
  "status": "passed"
});
});