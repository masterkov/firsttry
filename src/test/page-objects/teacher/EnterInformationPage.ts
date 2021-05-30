import BasePage from "../../../framework/pages/BasePage";
import Browser from "../../../framework/browser/Browser";
import ComboBox from "src/framework/elements/ComboBox";
import Input from "src/framework/elements/Input";
import Button from "src/framework/elements/Button";
import FormElement from "src/framework/elements/FormElement";
import URLS from "src/test/constants/PageUrl";

class EnterInformationPage extends BasePage {

  teacherSalutationComboBox = ()  => new ComboBox("//select[@ng-model='Teacher.Salutation']", "Teacher Salutation ComboBox");
  areaComboBox = (countryOrRegionAttribute : string) => new ComboBox(`//select[@ng-model='${countryOrRegionAttribute}']`, `${countryOrRegionAttribute} ComboBox`);
  teacherNameInput = (name : string) => new Input(`//div[@ng-hide='IsThirdPartyAuthentication']//input[@ng-model='Teacher.${name}Name']`, `Teacher ${name} Name Input`);
  schoolNameInput = () => new Input("//input[@ng-model='School']", "School Name Input");
  doneButton = () => new Button("//button[@ng-click='RegisterTeacher()']", "Done Button");
  loadingBarElement = () => new FormElement("#loading-bar", "Loading bar");
  schoolNameButton = () => new Button("//div[@ng-bind='match.model.Name']", "School name button");

  constructor() {
    super("//*[contains (text(),'Enter Your Information')]", "'Enter Your Information' Page");
  }

  chooseValueInSalutationComboBox = (value : string) : void => {
    this.teacherSalutationComboBox().selectByAttribute("label", value);
  }

  chooseValueInCountryComboBox = (value : string) : void => {
    this.areaComboBox("Country").selectByAttribute("label", value);
  }

  chooseValueInRegionComboBox = (value : string) : void => {
    this.areaComboBox("Region").selectByAttribute("label", value);
  }

  typeFirstNameInInput = (value : string) : void => {
    this.teacherNameInput("Last").setValue(value);
  }

  typeLastNameInInput = (value : string) : void => {
    this.teacherNameInput("First").setValue(value);
  }

  typeSchoolNameInInput = (value : string) : void => {
    this.schoolNameInput().setValue(value);
  }

  clickDoneButton = () : void => {
    this.doneButton().clickViaJs();
  }

  waitForLoadingBarDissapiar = () : void => {
    this.loadingBarElement().waitForElementToDissapiar();
  }

  clickEnteredSchoolName() : void {
    this.schoolNameButton().click();
  }

  waitUntilSchoolNameInputSet() : void {
    this.schoolNameInput().waitUntilAttributeEditToExpectedValue("aria-expanded", "false");
  }

  open() : void {
    Browser.openUrl(URLS.registerTeacherPage);
  }
}

export default EnterInformationPage;
