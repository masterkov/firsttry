import EnterInformationPage from "../page-objects/teacher/EnterInformationPage";
import Browser from "src/framework/browser/Browser";
import ACTIONS from "src/framework/constans/KeyboardActions";
import TeacherBuilder from "../models/TeacherBuilder";

class EnterInformationPageSteps {
  enterInformationPage = new EnterInformationPage();
  fillInformation = (teacherInfo : TeacherBuilder) : void => {
    this.enterInformationPage.chooseValueInSalutationComboBox(teacherInfo.getSalutation());
    this.enterInformationPage.typeFirstNameInInput(teacherInfo.getFirstName());
    this.enterInformationPage.typeLastNameInInput(teacherInfo.getLastName());
    this.enterInformationPage.chooseValueInCountryComboBox(teacherInfo.getCountry());
    this.enterInformationPage.chooseValueInRegionComboBox(teacherInfo.getProvince());
    browser.pause(5000);
    this.enterInformationPage.typeSchoolNameInInput(teacherInfo.getSchool());
    Browser.sendKey(ACTIONS.ENTER);
    this.enterInformationPage.waitUntilSchoolNameInputSet();
    this.enterInformationPage.clickDoneButton();
  }
}

export default EnterInformationPageSteps;
