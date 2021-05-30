import BasePage from "../../../framework/pages/BasePage";
import Browser from "../../../framework/browser/Browser";
import URLS from "src/test/constants/PageUrl";

class AddNewClassPage extends BasePage {

  constructor() {
    super("//*[contains (text(),'Add Your First Class!')]", "Add New Class Page");
  }

  open() : void {
    Browser.openUrl(URLS.loginPage);
  }
}

export default AddNewClassPage;
