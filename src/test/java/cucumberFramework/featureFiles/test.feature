Feature: Spree Application Test

@Sanity
Scenario: Home page Test
 Given : user Load the Application URL "https://spree-vapasi.herokuapp.com/" in browser
 When : user login the application
 Then : verify user is succefully logged in
 And : user quit application
 
@Sanity
Scenario: Home page Test
 Given : user Load the Application URL "https://gmail.com" in browser
 Then : user quit application