package steps;

//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;

public class APISteps {

    private static RequestSpecification request;
    private Response response;
    private ValidatableResponse json;

    @Given("^I send a GET request to the (.+) URI$")
    public void sendGETRequest(String URI){
        request = given()
                .baseUri(URI)
                .contentType(ContentType.JSON);
                
    }

    @Then("^I get a (\\d+) status code$")
    public void expectedStatusCode(int expectedStatusCode){
        response = request
                    .when()
                    .get("/users/TheFreeRangeTester/repos");
                    
        json = response.then().statusCode(expectedStatusCode);
        
    }

    @Then("^I validate there are (\\d+) items on the (.+) endpoint$")
    public void validateSize(int expectedSize, String endPoint){
        response = request
                    .when()
                    .get(endPoint);

                    List<String> jsonResponse = response.jsonPath().getList("$");
                    int actualSize = jsonResponse.size();

                    assertEquals(expectedSize, actualSize);
    }

    @Then("^I validate there is a value: (.+) in the response at (.+) endpoint$")
    public void validateValue(String expectedValue, String endPoint){
        response = request
                    .when()
                    .get(endPoint);

                    List<String> jsonResponse = response.jsonPath().getList("username");
                    assertTrue("El valor "+expectedValue+" no se encuentra en la lista.",jsonResponse.contains(expectedValue));
                    
                    //String actualValue = jsonResponse.get(0);
                    //assertEquals(expectedValue, actualValue);
    }
         
    @Then("^I can validate the nested value: (.+) on the response at (.+) endpoint$")
    public void validateNestedValue(String expectedStreet, String endPoint){
        response = request
                    .when()
                    .get(endPoint);

                    String jsonResponse = response.jsonPath().getString("address.street");
                    System.out.println(expectedStreet);
                    System.out.println(endPoint);
                    System.out.println(jsonResponse);
                    assertTrue("La calle "+expectedStreet+" no pertenece a ningún usuario.", jsonResponse.contains(expectedStreet));
                    
    }               
                          
}