package stepdef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import utils.DriverFactory;

public class SpreeStepdef {
    
	WebDriver driver = null;
	HomePage homePage;
	
	
	public SpreeStepdef() throws Exception {
     DriverFactory factory = new DriverFactory();
     driver = factory.createDriver();
	 homePage = new HomePage(driver);	

	}
	
	@Given("^: user Load the Application URL \"([^\"]*)\" in browser$")
	public void user_Load_the_Application_URL_in_browser(String arg1) throws Throwable {
		System.out.println("Application Logged in"); 
	}
	
	@When("^: user login the application$")
	public void user_login_the_application() throws Throwable {
		homePage.navigateToUrl();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS) ;
        homePage.clickLoginLink();
	}

	@Then("^: verify user is succefully logged in$")
	public void verify_user_is_succefully_logged_in() throws Throwable {
		
		 Thread.sleep(5000);
		 driver.quit();
	}
	
}
