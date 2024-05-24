package org.step;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FacebookStep2Dry extends BaseClass{
	
	@Given("launch the edge browser and hit url")
	public void launch_the_edge_browser_and_hit_url() {
	    browserLaunch();
	    getUrl("https://www.facebook.com/");
	    maxiMz();
	}
	@When("pass the valid in {string} emailField")
	public void pass_the_valid_in_emailField(String email)
	{
		driver.findElement(By.id("email")).sendKeys(email);
	}

	@When("pass the value in {string} passwordField")
	public void pass_the_value_in_passwordField(String pass) {
	  driver.findElement(By.id("pass")).sendKeys(pass);
	}


	@When("click the login button")
	public void click_the_login_button() 
	{
		driver.findElement(By.name("login")).click();
	}

	@Then("close the edge browser")
	public void close_the_edge_browser() {
		quitBrow();
	    
	}




}
