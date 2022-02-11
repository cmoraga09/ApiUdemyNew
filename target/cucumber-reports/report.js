$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/AmazonSearch.feature");
formatter.feature({
  "name": "Test Amazon search functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Amazon"
    }
  ]
});
formatter.scenarioOutline({
  "name": "As a Customer when I search for Alexa, I want to see if the third option on the second page is available for purchase and can be added to the cart.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Cart"
    }
  ]
});
formatter.step({
  "name": "the user navigates to www.amazon.com",
  "keyword": "Given "
});
formatter.step({
  "name": "searches for \u003cProduct\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "navigates to the page number 2",
  "keyword": "And "
});
formatter.step({
  "name": "selects the third item",
  "keyword": "And "
});
formatter.step({
  "name": "the user is able to add it to the cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product"
      ]
    },
    {
      "cells": [
        "Alexa"
      ]
    },
    {
      "cells": [
        "Playstation"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a Customer when I search for Alexa, I want to see if the third option on the second page is available for purchase and can be added to the cart.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Amazon"
    },
    {
      "name": "@Cart"
    }
  ]
});
formatter.step({
  "name": "the user navigates to www.amazon.com",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonSearchSteps.navigateToAmazon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "searches for Alexa",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonSearchSteps.enterSearchCriteria(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to the page number 2",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonSearchSteps.navigateToSecondPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects the third item",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonSearchSteps.selectsThirdItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is able to add it to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonSearchSteps.itemCanBeAddedToTheCart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a Customer when I search for Alexa, I want to see if the third option on the second page is available for purchase and can be added to the cart.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Amazon"
    },
    {
      "name": "@Cart"
    }
  ]
});
formatter.step({
  "name": "the user navigates to www.amazon.com",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonSearchSteps.navigateToAmazon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "searches for Playstation",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonSearchSteps.enterSearchCriteria(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to the page number 2",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonSearchSteps.navigateToSecondPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects the third item",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonSearchSteps.selectsThirdItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is able to add it to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonSearchSteps.itemCanBeAddedToTheCart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //input[@id\u003d\u0027add-to-cart-button\u0027] (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pages.BasePage.Find(BasePage.java:54)\r\n\tat pages.BasePage.clickElement(BasePage.java:59)\r\n\tat pages.AmazonSearchPage.addToCart(AmazonSearchPage.java:36)\r\n\tat steps.AmazonSearchSteps.itemCanBeAddedToTheCart(AmazonSearchSteps.java:44)\r\n\tat ✽.the user is able to add it to the cart(src/test/resources/features/AmazonSearch.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027add-to-cart-button\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-9VMSIDP\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63427}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9d9f010169117759f381628c83903bdb\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027add-to-cart-button\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor8.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pages.BasePage.Find(BasePage.java:54)\r\n\tat pages.BasePage.clickElement(BasePage.java:59)\r\n\tat pages.AmazonSearchPage.addToCart(AmazonSearchPage.java:36)\r\n\tat steps.AmazonSearchSteps.itemCanBeAddedToTheCart(AmazonSearchSteps.java:44)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.write("Scenario fallando, referirse a la imagen adjunta.");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});