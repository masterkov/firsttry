import BaseElement from "./BaseElement";
import ACTIONS from "src/framework/constans/KeyboardActions";
import Browser from "src/framework/browser/Browser";

class Input extends BaseElement {

  clear() : void {
    this.waitUntilDisplayed();
    this.clearByBackspace();
  }

  clearAndSet(value : string | number) :void {
    this.clear();
    this.setValue(value);
  }

  setValue(value : string | number) : void {
    this.get().setValue(value);
  }

  clearByBackspace() : void {
    [...Array(this.get().getValue.length)].forEach(() => Browser.sendKey(ACTIONS.BACKSPACE));
  }
}

export default Input;
