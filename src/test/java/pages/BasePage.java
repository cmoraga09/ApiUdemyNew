package pages;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;



public class BasePage {

    protected static WebDriver driver; //una sola instancia de webdriver compartida para todas las clases
    private static WebDriverWait wait; //espera
    private static Actions action;

    static{
        ChromeOptions chromeOptions = new ChromeOptions();
        driver = new ChromeDriver(chromeOptions);
        wait = new WebDriverWait(driver, 10); //10 segundos de espera para la busqueda de elementos
        System.setProperty("webdriver.chrome.driver", "D:/java/librerias/chromedriver/chromedriver.exe");
    }

    //Constructor
    public BasePage(WebDriver driver){
        BasePage.driver = driver;
        wait = new WebDriverWait(driver, 10);
        

    }

    public static void navigateTo(String url){
        driver.get(url);
    }

    public void goToLinkText(String linkText){
        driver.findElement(By.linkText(linkText)).click();
    }

    public static void closeBrowser(){
        driver.quit();
    }

    // busqueda generica de un webelement mediante xpath
    private WebElement Find (String locator){
        return wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locator)));
    }

    //funcion generica para hacer clik sobre un webelement
    public void clickElement (String locator){
        Find(locator).click();
    }

    public void write (String locator, String textToWrite){
        Find(locator).clear();
        Find(locator).sendKeys(textToWrite);

    }
    
    public void selectFromDropdownByValue(String locator, String valueToSelect){
        Select dropdown = new Select(Find(locator));
        dropdown.selectByValue(valueToSelect);
    }

    public void selectFromDropdownByIndex(String locator, int valueToSelect){
        Select dropdown = new Select(Find(locator));
        dropdown.selectByIndex(valueToSelect);
    }

    public void selectFromDropdownByText(String locator, String valueToSelect){
        Select dropdown = new Select(Find(locator));
        dropdown.selectByVisibleText(valueToSelect);
    }

    //funcion que hace un hoverOver
    public void hoverOverElement(String locator){
        action.moveToElement(Find(locator));
    }

    //funcion que hace un dobleclick sobre un elemento
    public void doubleClick(String locator){
        action.doubleClick(Find(locator));
    }

     //funcion que hace un clickderecho sobre un elemento
     public void rightClick(String locator){
        action.contextClick(Find(locator));
    }

    public String getValueFromTable(String locator, int row, int column){
        String cellINeed = locator+"/table/tbody/tr["+row+"]/td["+column+"]";

        return Find(cellINeed).getText();
    }

    public void setValueOnTable(String locator, int row, int column, String stringToSend){
        String cellToFill = locator+"/table/tbody/tr["+row+"]/td["+column+"]";

        Find(cellToFill).sendKeys(stringToSend);
    }


    // funcion para cambiar de iFrame mediente el indez
    public void switchToiFrame(String iFrameIndex){
        driver.switchTo().frame(iFrameIndex);
    }

    // funcion para volver al frame padre
    public void switchToParentFrame(){
        driver.switchTo().parentFrame();
    }

    //funcion que descarta la alerta
    public void dismissAlert(){
        try{
        driver.switchTo().alert().dismiss();
        }catch (NoAlertPresentException e){
            e.printStackTrace();
        }
    }

    public void validateText(String locator, String textToValidate){
        Assert.assertEquals(textToValidate, Find(locator).getText());
    }

    public String textFromElement(String locator){
        return Find(locator).getText();

    }

    public boolean elementEnabled(String locator){

        return Find(locator).isEnabled();
    }

    public boolean elementIsDisplayed(String locator){

        return Find(locator).isDisplayed();
    }

    public boolean elementIsSelected(String locator){

        return Find(locator).isSelected();
    }

    public List<WebElement>bringMeAllElements(String locator){
        return driver.findElements(By.className(locator));
    }







}
