import BasePage from "src/framework/pages/BasePage";
import Button from "src/framework/elements/Button";

class TeacherKickOffMissionPage extends BasePage {

  letsGoButton = new Button("//button[starts-with(@ng-click, 'AssignKick')]", "Let's Go Button");

  constructor() {
    super(".center-vertical", "Teacher kick off mission");
  }

  clickOnLetsGoButton() {
    this.letsGoButton.clickViaJs();
  }

}

export default TeacherKickOffMissionPage;
