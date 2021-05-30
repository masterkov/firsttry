import Button from "src/framework/elements/Button";
import Input from "src/framework/elements/Input";
import Label from "src/framework/elements/Label";
import BasePage from "../../../framework/pages/BasePage";

class AddStudentsPage extends BasePage {

  createAccountsForMyStudentsButton = () => new Button("//div[@class='add-student-modal__choice-button']", "I'll create accounts for my students button");
  studentNameInput = () => new Input("#add-student-first-name-field", "Type Student Name");
  addStudentButton = () => new Button("//button[@type='submit']", "Add Student Button");
  addedStudentLabel = () => new Label("//td[@class='added-students-table__cell-name ng-binding']", "Added student label");

  constructor() {
    super("//div[@class='AddStudentModalInstructions add_student_block']", "Add Students Page");
  }

  clickOnCreateAccountsForMyStudentsButton() : void {
    this.createAccountsForMyStudentsButton().click();
  }

  typeStudentNameInInput(value : string) : void {
    this.studentNameInput().setValue(value);
  }

  waitForCreateStudentInputOpened() : void {
    this.studentNameInput().waitUntilDisplayed();
  }

  clickAddStudentButton() : void {
    this.addStudentButton().click();
  }

  getNamesOfStudentsFromAddedStudentsLabel() : string[] {
    return this.addedStudentLabel().getTextFromElements();
  }
}

export default AddStudentsPage;
