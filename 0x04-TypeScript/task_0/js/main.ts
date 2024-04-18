/**
 * Write an interface named Student that accepts the following elements:
 * firstName(string), lastName(string), age(number), and location(string)
 * Create two students, and create an array named studentsList containing the two variables
 * Using Vanilla Javascript, render a table and for each elements in the array,
 * append a new row to the table
 * Each row should contain the first name of the student and the location
 */
interface Student {
    firstName: String;
    lastName: String;
    age: Number;
    location: String;
}

const student1 : Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "Washington",
}

const student2 : Student = {
    firstName: "Guilame",
    lastName: "Silva",
    age: 25,
    location: "Paris",
}

const studentsList: Array<Student> = [student1, student2];

const table = studentsList.map((table) => ({firstName: table.firstName, location: table.location}));
export default table;