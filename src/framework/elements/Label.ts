import BaseElement from "./BaseElement";
import { TIMEOUTS }  from "src/test/constants/Timeouts";
import { ElementArray } from "webdriverio";

class Label extends BaseElement {
  waitForTextToBePresent(timeOut = TIMEOUTS.SHORT) {
    this.waitUntilDisplayed();
    browser.waitUntil(
            () => {
              return this.get().getText().length >= 1;
            },
      { timeout: timeOut,
        timeoutMsg: `expect text to be present in  ${this.getName()} element`,
      },
        );
  }

  getText(timeOut = TIMEOUTS.SHORT) : string {
    this.waitForTextToBePresent(timeOut);
    return this.get().getText();
  }

  getTextFromElements() : string[] {
    const elements : ElementArray = this.getElements();
    return elements.map(el => el.getText());
  }

}

export default Label;
