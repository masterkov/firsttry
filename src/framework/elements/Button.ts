import BaseElement from "./BaseElement";

class Button extends BaseElement {

  click() : void {
    this.waitUntilClickable();
    this.get().click();
  }

  clickViaJs() :void {
    browser.execute("arguments[0].click();", this.get());
  }
}

export default Button;
