package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;

import java.io.File;

public class BraveNewCoinAPISteps {
    private static RequestSpecification request;
    private Response response;
    private ValidatableResponse json;

    @Given("^I have a valid API Key for the (.+) URI$")
    public void iSetTheRequestParams(String URI) { // relaxedHTTPSValidation() sirve para conectarse al servidor sin
                                                   // validar los certificados
        request = given().relaxedHTTPSValidation()
                .header("X-RapidAPI-Key", "c957272854msh7d7a6ed56814fd3p1db9e6jsn31123d08edad")
                .header("X-RapidAPI-Host", "bravenewcoin.p.rapidapi.com")
                .contentType(ContentType.JSON).baseUri(URI)
                .log().all();
    }

    @When("^I send a POST request with a valid (.+) payload to the (.+) endpoint$")
    public void sendPOSTRequest(String payload, String endpoint) {
        /*
         * String requestBody = "{\n" +
         * " \"audience\": \"https://api.bravenewcoin.com\", \n"
         * + " \"client_id\": \"oCdQoZoI96ERE9HY3sQ7JmbACfBf55RY\",\n"
         * + " \"grant_type\": \"client_credentials\"\n" + "}";
         */
        File requestBody = new File("src/test/resources/Payloads/" + payload + ".json");

        response = request.when().body(requestBody).post(endpoint).prettyPeek(); // prettyPeek imprime la respuesta
    }

    @Then("^I can validate I receive a valid token in the response$")
    public void validateTheToken() {

    }
}
