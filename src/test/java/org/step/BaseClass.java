package org.step;

import java.awt.Desktop.Action;
import java.util.Date;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;

public class BaseClass {
	
	public static WebDriver driver;
	public static Actions a;
	public static Alert b;
	
	public static void browserLaunch() {
		driver =new EdgeDriver();
	}
	public static void getUrl(String anyUrl) {
		driver.get(anyUrl);
		
	}
	public static void maxiMz() {
		driver.manage().window().maximize();
	}
	public static void priTl() {
		String title = driver.getTitle();
		System.out.println(title);
	}
	public static String prnCuntUrl() {
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
		return currentUrl;
	}
	
	//WEB_ELEMENT
	public static void fillTextBox(WebElement webRef,String anyValue) {
		webRef.sendKeys(anyValue);
	}
	public static void getAttribute(WebElement element ) {
	String attribute=element.getDomAttribute("value");	
    
	}
	public static void btnClik(WebElement webRef) {
	webRef.click();	
	}
	public static void quitBrow() {
	driver.quit();	
	}
	
	//actions
	public static void dragAndDp(WebElement src,WebElement target) {
	a=new Actions (driver);	
    a.dragAndDrop(src, target).perform();
	}
	public static void doubleTab() {
	a.doubleClick().perform();	
	}
	public static void moveCursor(WebElement element) {
	a.moveToElement(element).perform();
	}
	public static void rightClick(WebElement element) {
	a.contextClick(element).perform();	
	}
	//alerts
	public static void switchToAlt() {
		b=driver.switchTo().alert();
	}
	public static void acceptAlt() {
		b.accept();
	}
	public void dismissAlt() {
		b.dismiss();
	}
	public void passTheText(String passtxt) {
		b.sendKeys(passtxt);
	}
	
	//date and time
	
	
	

}
