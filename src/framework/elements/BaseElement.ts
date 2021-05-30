import { TIMEOUTS } from "src/test/constants/Timeouts";

class BaseElement {
  locator : string;
  name : string;

  constructor(locator : string, name : string) {
    this.locator = locator;
    this.name = name;
  }

  getLocator() : string {
    return this.locator;
  }

  getName() : string {
    return this.name;
  }

  get() : WebdriverIO.Element {
    return $(this.locator);
  }

  getElements() : WebdriverIO.ElementArray {
    return $$(this.locator);
  }

  isDisplayed(timeOut= TIMEOUTS.SHORT) : boolean {
    return this.get().isDisplayed();
  }

  waitUntilExists(timeOut= TIMEOUTS.SHORT) : void {
    this.get().waitForExist({ timeout: timeOut });
  }

  waitUntilDisplayed(timeOut= TIMEOUTS.SHORT) : void {
    this.get().waitForDisplayed({ timeout: timeOut });
  }

  waitUntilClickable(timeOut= TIMEOUTS.SHORT) : void {
    this.get().waitForClickable({ timeout: timeOut });
  }

  getAttributeFromElement(attribute : string) : string {
    this.get().waitForExist();
    return this.get().getAttribute(attribute);
  }

  waitUntilAttributeEditToExpectedValue(attribute : string, expectedValue : string, timeOut = TIMEOUTS.SHORT) : void {
    this.waitUntilExists(timeOut);
    browser.waitUntil(
            () => {
              return this.getAttributeFromElement(attribute) === expectedValue;
            },
            { timeout: timeOut },
        );
  }

}

export default BaseElement;
