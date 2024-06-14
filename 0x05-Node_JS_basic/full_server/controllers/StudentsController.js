/**
 * create a class named StudentsController. Add two static methods:
 */
const readDatabase = require('../utils');

const filename = process.argv[2];

module.exports = class StudentsController {
  /**
   * The first one is getAllStudents:
   * The method accepts request and response as argument
   * It should return a status 200
   * It calls the function readDatabase from the utils file, and display in the page:
   * First line: This is the list of our students
   * And for each field (order by alphabetic order case insensitive),
   * a line that displays the number of students in the field, and the list of first names
   * (ordered by appearance in the database file) with the following format:
   * Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
   * If the database is not available, it should return a status 500 and
   * the error message Cannot load the database
   */
  static getAllStudents(request, response) {
    readDatabase(filename).then((results) => {
      response.statusCode = 200;
      response.write('This is the list of our students\n');
      const output = [];
      Object.keys(results).sort().forEach((key) => {
        output.push(`Number of students in ${key}: ${results[key].length}. List: ${results[key].join(', ')}`);
      });
      response.end(output.join('\n'));
    }).catch(() => {
      response.statusCode = 500;
      response.end('Cannot load the database');
    });
  }

  /**
  * The second one is getAllStudentsByMajor:
  * The method accepts request and response as argument
  * It should return a status 200
  * It uses a parameter that the user can pass to the browser major.
  * The major can only be CS or SWE. If the user is passing another parameter,
  * the server should return a 500 and the error Major parameter must be CS or SWE
  * It calls the function readDatabase from the utils file, and display in the page
  * the list of first names for the students (ordered by appearance in the database file)
  * in the specified field List: LIST_OF_FIRSTNAMES_IN_THE_FIELD
  * If the database is not available, it should return a status 500 and the error message
  * Cannot load the database
  */
  static getAllStudentsByMajor(request, response) {
    readDatabase(filename).then((results) => {
      const output = [];
      const key = request.params.major;
      if (key === 'CS' || key === 'SWE') {
        response.statusCode = 200;
        output.push(`List: ${results[key].join(', ')}`);
      } else {
        response.statusCode = 500;
        response.end('Major parameter must be CS or SWE');
      }
      response.end(output.join('\n'));
    }).catch(() => {
      response.statusCode = 500;
      response.end('Cannot load the database');
    }).finally(() => response);
  }
};
