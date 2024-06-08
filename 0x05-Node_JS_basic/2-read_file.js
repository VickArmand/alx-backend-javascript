/**
 * Create a function named countStudents. It should accept a path in argument
 * The script should attempt to read the database file synchronously
 * If the database is not available, it should throw an error with the text
 * Cannot load the database
 * If the database is available, it should log the following message to the
 * console Number of students: NUMBER_OF_STUDENTS
 * It should log the number of students in each field, and the list with the following format:
 * Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 */
const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const contents = data.toString().split('\n');
    console.log(`Number of students: ${contents.length - 1}`);
    const students = {};
    for (let i = 1; i < contents.length; i += 1) {
      const row = contents[i].toString().split(',');
      students[row[3]] = [];
    }
    contents.forEach((content) => {
      const row = content.split(',');
      if (row[3] in students) {
        students[row[3]].push(row[0]);
      }
    });
    Object.keys(students).forEach((key) => {
      console.log(`Number of students in ${key}: ${students[key].length}. List: ${students[key].join(', ')}`);
    });
  } catch (error) {
    throw Error('Cannot load the database');
  }
};
