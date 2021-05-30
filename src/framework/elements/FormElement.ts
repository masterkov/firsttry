import BaseElement from "./BaseElement";
import { TIMEOUTS } from "src/test/constants/Timeouts";

class FormElement extends BaseElement {

  waitForElementToDissapiar(timeOut = TIMEOUTS.MEDIUM) : void {
    this.get().waitForDisplayed({ timeout: timeOut });
    this.get().waitUntil(
            () => {
              return this.getElements().length === 0;
            },
            { timeout: timeOut },
        );
  }
}

export default FormElement;
