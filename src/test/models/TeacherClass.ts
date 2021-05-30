class TeacherClass {
  name : string;
  grade : string;

  constructor(name : string, grade : string) {
    this.name = name;
    this.grade = grade;
  }

  getName() {
    return this.name;
  }

  getGrade() {
    return this.grade;
  }

}

export default TeacherClass;
