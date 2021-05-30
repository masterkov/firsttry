import BasePage from "../../../framework/pages/BasePage";
import Button from "../../../framework/elements/Button";
import Browser from "../../../framework/browser/Browser";
import URLS from "../../constants/PageUrl";

class LoginPage extends BasePage {

  registerButton = ()  => new Button("#registerBtn", "Register Button");
  studentsButton = ()  => new Button("//a[@href='/app/StudentJoin']", "Students Button");

  constructor() {
    super(".login-form-container", "Login");
  }

  clickOnRegistrationButton = () : void => {
    this.registerButton().click();
  }

  open() : void {
    Browser.openUrl(URLS.loginPage);
  }
}

export default LoginPage;
