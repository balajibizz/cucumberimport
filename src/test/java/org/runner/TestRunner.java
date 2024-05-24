package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.JvmReport;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources",glue="org.step",dryRun = false,strict = true,
plugin = {"html:target","junit:JUNIT//junitrepo.xml","json:JSON//jsonre.json"})



public class TestRunner {
	@AfterClass
	public static void jvmrepo() {
		
JvmReport.reportJvm("C:\\Users\\themu\\eclipse-workspace\\TestCucumber\\JSON\\jsonre.json");
	}

	
}
