/**
 * firstName(string) and lastName(string).
 * These two attributes should only be modifiable when a Teacher is first initialized
 * fullTimeEmployee(boolean) this attribute should always be defined
 * yearsOfExperience(number) this attribute is optional
 * location(string) this attribute should always be defined
 * Add the possibility to add any attribute to the Object like contract(boolean)
 * without specifying the name of the attribute
 * Write an interface named Directors that extends Teacher.
 * It requires an attribute named numberOfReports(number)
 * Write a function printTeacher:
 * It accepts two arguments firstName and lastName
 * It returns the first letter of the firstName and the full lastName
 * Example: printTeacher("John", "Doe") -> J. Doe
 * Write an interface for the function named printTeacherFunction.
 * Write a Class named StudentClass:
 * The constructor accepts firstName(string) and lastName(string) arguments
 * The class has a method named workOnHomework that return the string Currently working
 * The class has a method named displayName. It returns the firstName of the student
 * The constructor of the class should be described through an Interface
 * The class should be described through an Interface
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key:string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
  printTeacher(): string;
}
interface Student{
  firstName: string;
  lastName: string;
}
class StudentClass implements Student{
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}