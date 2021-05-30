class TeacherBuilder {
  salutation : string;
  firstName : string;
  lastName : string;
  country : string;
  province : string;
  school : string;

  static createDefault() : TeacherBuilder {
    return new TeacherBuilder()
            .withSalutation("Ms.")
            .withFirstName("Agata")
            .withLastName("Kristi")
            .withCountry("Canada")
            .withProvince("Ontario")
            .withSchool("Duncan J. Schoular Public School");
  }

  withSalutation(salutation : string) : TeacherBuilder {
    this.salutation = salutation;
    return this;
  }

  withFirstName(firstName : string) : TeacherBuilder {
    this.firstName = firstName;
    return this;
  }

  withLastName(lastName : string) : TeacherBuilder {
    this.lastName = lastName;
    return  this;
  }

  withCountry(country : string) : TeacherBuilder {
    this.country = country;
    return this;
  }

  withProvince(province : string) : TeacherBuilder {
    this.province = province;
    return this;
  }

  withSchool(school : string) : TeacherBuilder {
    this.school = school;
    return this;
  }

  getSalutation() {
    return this.salutation;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getCountry() {
    return this.country;
  }

  getProvince() {
    return this.province;
  }

  getSchool() {
    return this.school;
  }
}

export default TeacherBuilder;
