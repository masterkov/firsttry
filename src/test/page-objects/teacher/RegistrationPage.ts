import BasePage from "../../../framework/pages/BasePage";
import Button from "../../../framework/elements/Button";
import URLS from "src/test/constants/PageUrl";
import Browser from "../../../framework/browser/Browser";

class RegistrationPage extends BasePage {

  registerUserButton = typeOfUser => new Button(`#register${typeOfUser}Btn`, `Register ${typeOfUser} Button`);

  constructor() {
    super("//div[@class = 'registration-container mobile-container-sm center']", "Registration Page");
  }

  clickOnRegisterTeacherButton = () : void => {
    this.registerUserButton("Teacher").click();
  }

  open() : void {
    Browser.openUrl(URLS.registerPage);
  }
}

export default RegistrationPage;
