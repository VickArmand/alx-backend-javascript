/**
 * create a function named readDatabase that accepts a file path as argument:
 * It should read the database asynchronously
 * It should return a promise
 * When the file is not accessible, it should reject the promise with the error
 * When the file can be read, it should return an object of arrays of the firstname
 * of students per fields
 */
const fs = require('fs');

module.exports = function readDatabase(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) reject(err);
      else {
        const contents = data.split('\n');
        const students = {};
        for (let i = 1; i < contents.length; i += 1) {
          const row = contents[i].split(',');
          students[row[3]] = [];
        }
        contents.forEach((content) => {
          const row = content.split(',');
          if (row[3] in students) {
            students[row[3]].push(row[0]);
          }
        });
        resolve(students);
      }
    });
  });
};
