import StudentInfo from "../models/StudentInfo";
import AddStudentsPage from "../page-objects/teacher/AddStudentsPage";

class AddStudentsSteps {
  addStudentsPage  = new AddStudentsPage();

  typeStudentsNames(studentInfo : StudentInfo) {
    this.addStudentsPage.typeStudentNameInInput(studentInfo.getName());
    this.addStudentsPage.clickAddStudentButton();
  }

}

export default AddStudentsSteps;
