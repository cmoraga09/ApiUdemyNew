package runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//import pages.BasePage;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", glue = "steps", plugin = {
        "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:", "json:target/cucumber-reports.json" },
        // plugin = { "pretty", "html:target/cucumber-reports"},
        monochrome = true,
        // tags = {"@Amazon","@Cart"}
        tags = { "@BraveNewCoin", "@API" }
// gradle test -DcucumberOptions="--tags @Grid, --tags @Smoke"

)

public class runner {

    // cierra el browser despues de cada ejecucion
    @AfterClass
    public static void cleanDriver() {
        // BasePage.closeBrowser();
    }

}
