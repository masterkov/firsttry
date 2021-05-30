import { TIMEOUTS } from "src/test/constants/Timeouts";

class BasePage {
  locator : string;
  name : string;

  constructor(locator :string, name :string) {
    this.locator = locator;
    this.name = name;
  }
  get() : WebdriverIO.Element {
    return $(this.locator);
  }

  isOpened() : boolean {
    return this.get().isDisplayed();
  }

  waitForPageToBeOpened(timeOut = TIMEOUTS.LONG) :void {
    browser.waitUntil(() => this.isOpened() === true,
      {
        timeout: timeOut,
        timeoutMsg : `${this.name} Page is not opened after ${timeOut / 1000} sec`,
      },
        );
  }
}

export default BasePage;
