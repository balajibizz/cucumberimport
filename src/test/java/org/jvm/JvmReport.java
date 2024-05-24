package org.jvm;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	
	public static void reportJvm(String jsonPath) {
	
				File f = new File("C:\\Users\\themu\\eclipse-workspace\\TestCucumber\\JVM");
				// *Add details to the report using Configuration class ----
				// addClassifications("point1","point2")

				Configuration c = new Configuration(f, "FaceBook & Amazon");
				c.addClassifications("platformname", "windows");
				c.addClassifications("platform version", "10");
				c.addClassifications("browername", "chrome");
				c.addClassifications("browser version", "124.0.6367.203");

				// *Add json file paths into List<String>
				List<String> li = new LinkedList<>();
				li.add(jsonPath);

				// *Create object for ReportBuilder class and using the created object call
				// generateReports() method.
				ReportBuilder r = new ReportBuilder(li, c);
				r.generateReports();
	}

}
