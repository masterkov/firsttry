import BasePage from "src/framework/pages/BasePage";
import Input from "src/framework/elements/Input";
import ComboBox from "src/framework/elements/ComboBox";
import Button from "src/framework/elements/Button";

class AddYourFirstClassPage extends BasePage {

  classNameInput = () => new Input("//input[@placeholder='Class Name']", "TeacherClass Name Input");
  gradeComboBox = () => new ComboBox("//select[@ng-model='NewClass.CourseId']", "Grade ComboBox");
  createClassButton = () => new Button("//button[starts-with(@ng-click,'CreateClass')]", "Create TeacherClass Button");

  constructor() {
    super("//div[starts-with(@class,'add-class-container')]", "Add Your First TeacherClass");
  }

  enterClassName(className : string) : void {
    this.classNameInput().clearAndSet(className);
  }

  selectGrade(grade : string) : void {
    this.gradeComboBox().selectByAttribute("label", grade);
  }

  createClass() : void {
    this.createClassButton().click();
  }
}

export default AddYourFirstClassPage;
