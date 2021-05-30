import AddYourFirstClassPage from "src/test/page-objects/teacher/AddYourFirstClassPage";
import TeacherClass from "../models/TeacherClass";

class AddYouFirstClassSteps {
  addYouFirstClassPage  = new AddYourFirstClassPage();

  createClass(teacherClass : TeacherClass) {
    this.addYouFirstClassPage.enterClassName(teacherClass.getName());
    this.addYouFirstClassPage.selectGrade(teacherClass.getGrade());
    this.addYouFirstClassPage.createClass();
  }
}

export default AddYouFirstClassSteps;
