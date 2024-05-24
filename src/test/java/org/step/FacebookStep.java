package org.step;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FacebookStep extends BaseClass {
	
	@Given("to launch the edge browser and hit url")
	public void to_launch_the_edge_browser_and_hit_url() {
	    browserLaunch();
	    getUrl("https://www.facebook.com/");
	    maxiMz();
	}

	

	@When("to pass the valid emailId in emailField")
	public void to_pass_the_valid_emailId_in_emailField() {
		driver.findElement(By.id("email")).sendKeys("qwertyu");
		System.out.println(" pass");
	}

	@When("to pass the invalid password in passwordField")
	public void to_pass_the_invalid_password_in_passwordField() {
		driver.findElement(By.id("pass")).sendKeys("1234");
		System.out.println(" fail");
	}

	@When("to click the login button")
	public void to_click_the_login_button() {
		driver.findElement(By.name("login")).click();
		System.out.println(" done");
	}

	@Then("to close  edge browser")
	public void to_close_edge_browser() {
		quitBrow();
	}




}
