import BasePage from "../../../framework/pages/BasePage";
import Button from "../../../framework/elements/Button";
import Browser from "../../../framework/browser/Browser";
import Input from "src/framework/elements/Input";
import CheckBox from "src/framework/elements/CheckBox";
import URLS from "src/test/constants/PageUrl";

class CreateTeacherAccountPage extends BasePage {

  emailInput = () => new Input("//input[@ng-model='Teacher.Email']", "Email input");
  passwordInput = () => new Input("//input[@type='password']", "Password input");
  agreeTermsCheckbox = () => new CheckBox("//table[@class='register-teacher-privacy-checkbox']//button", "Checkbox 'Agree Terms and Privacy policy'");
  confirmRegistrationButton = () => new Button("//button[@ng-click='ValidateEmail()']", "Confirm Registartion Button");

  constructor() {
    super("//*[contains (text(),'Create Your Teacher Account')]", "'Create Your Teacher Account' Page");
  }

  typeTextInEmailInput = (value : string) : void => {
    this.emailInput().clearAndSet(value);
  }

  typeTextInPasswordInput = (value : string) : void => {
    this.passwordInput().clearAndSet(value);
  }

  clickOnAgreeTermsCheckbox = () : void => {
    this.agreeTermsCheckbox().click();
  }

  clickOnConfirmRegistrationButton = () : void => {
    this.confirmRegistrationButton().click();
  }

  open() : void {
    Browser.openUrl(URLS.registerTeacherPage);
  }
}

export default CreateTeacherAccountPage;
