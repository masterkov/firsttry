import CreateTeacherAccountPage from "../page-objects/teacher/СreateTeacherAccountPage";

class CreateTeacherAccountPageSteps {

  createTeacherAccountPage = new CreateTeacherAccountPage();

  teacherRegistration = (email : string, teacherPassword : string) : void => {
    this.createTeacherAccountPage.typeTextInEmailInput(email);
    this.createTeacherAccountPage.typeTextInPasswordInput(teacherPassword);
    this.createTeacherAccountPage.clickOnAgreeTermsCheckbox();
    this.createTeacherAccountPage.clickOnConfirmRegistrationButton();
  }
}

export default CreateTeacherAccountPageSteps;
