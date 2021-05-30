import LoginPage from "src/test/page-objects/teacher/LoginPage";
import RegistrationPage from "src/test/page-objects/teacher/RegistrationPage";
import CreateTeacherAccountPage from "src/test/page-objects/teacher/СreateTeacherAccountPage";
import EnterInformationPage from "src/test/page-objects/teacher/EnterInformationPage";
import AddNewClassPage from "src/test/page-objects/teacher/AddNewClassPage";
import TeacherKickOffMissionPage from "src/test/page-objects/teacher/TeacherKickOffMissionPage";
import AddStudentsPage from "src/test/page-objects/teacher/AddStudentsPage";
import CreateTeacherAccountPageSteps from "src/test/steps/CreateTeacherAccountPageSteps";
import EnterInformationPageSteps from "src/test/steps/EnterInformationPageSteps";
import Assert from "src/framework/asserts/Assert";
import StringHelpers from "src/framework/helpers/StringHelper";
import AddYouFirstClassSteps from "src/test/steps/AddYouFirstClassSteps";
import AddStudentsSteps from "src/test/steps/AddStudentsSteps";
import TeacherClass from "src/test/models/TeacherClass";
import StudentInfo from "src/test/models/StudentInfo";
import GRADES from "src/test/constants/Grades";
import CLASSES from "src/test/constants/Classes";
import TeacherBuilder from "src/test/models/TeacherBuilder";

const loginPage = new LoginPage();
const registerPage = new RegistrationPage();
const createTeacherAccountPage = new CreateTeacherAccountPage();
const enterInformationPage = new EnterInformationPage();
const addNewClassPage = new AddNewClassPage();
const createTeacherAccountPageSteps = new CreateTeacherAccountPageSteps();
const enterInformationPageSteps = new EnterInformationPageSteps();
const addYouFirstClassSteps = new AddYouFirstClassSteps();
const teacherKickOffMissionPage = new TeacherKickOffMissionPage();
const addStudentsPage = new AddStudentsPage();
const addStudentsSteps = new AddStudentsSteps();

const teacherClass = new TeacherClass(CLASSES.CHEMISTRY_CLASS, GRADES._3rdGrade);
const firstStudent = new StudentInfo("Thom");
const secondStudent = new StudentInfo("Adam");
const firstTeacher = TeacherBuilder.createDefault();

const emailLength : number = 5;
const teacherPassword : string = "abcd";
const endOfEmail = "@example.com";

describe("Basic registrations", () => {
  before(() => {
    loginPage.open();
  });

  it("check Create teacher account page is opened", () => {
    loginPage.clickOnRegistrationButton();
    registerPage.clickOnRegisterTeacherButton();
    createTeacherAccountPage.waitForPageToBeOpened();
    Assert.true(createTeacherAccountPage.isOpened());
  });

  it("verify that Enter Your Information page is opened", () => {
    createTeacherAccountPageSteps.teacherRegistration(`${StringHelpers.generateStringByLength(emailLength)}${endOfEmail}`, teacherPassword);
    enterInformationPage.waitForPageToBeOpened();
    Assert.true(enterInformationPage.isOpened());
  });

  it("verify that Add Your First Class page is opened", () => {
    enterInformationPageSteps.fillInformation(firstTeacher);
    addNewClassPage.waitForPageToBeOpened();
    Assert.true(addNewClassPage.isOpened());
  });

  it("verify that Kick Off Mission page is opened", () => {
    addYouFirstClassSteps.createClass(teacherClass);
    teacherKickOffMissionPage.waitForPageToBeOpened();
    Assert.true(teacherKickOffMissionPage.isOpened());
  });

  it("verify that the following students are displayed after adding on Add Students page", () => {
    teacherKickOffMissionPage.clickOnLetsGoButton();
    addStudentsPage.waitForPageToBeOpened();
    addStudentsPage.clickOnCreateAccountsForMyStudentsButton();
    addStudentsPage.waitForCreateStudentInputOpened();
    addStudentsSteps.typeStudentsNames(firstStudent);
    addStudentsSteps.typeStudentsNames(secondStudent);
    const studentsNamesFromLabel : string[] = addStudentsPage.getNamesOfStudentsFromAddedStudentsLabel();
    Assert.toContains(studentsNamesFromLabel, firstStudent.getName());
    Assert.toContains(studentsNamesFromLabel, secondStudent.getName());
  });
});
