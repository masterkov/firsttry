import BaseElement from "./BaseElement";

class ComboBox extends BaseElement {

  selectByVisibleText(value : string | number) : void {
    this.get().selectByVisibleText(value);
  }

  selectByIndex(index : number) : void {
    this.get().selectByVisibleText(index);
  }

  selectByAttribute(attribute : string, value : string | number) : void {
    this.get().selectByAttribute(attribute, value);
  }
}

export default ComboBox;
