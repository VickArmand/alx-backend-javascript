/**
 * recreate the small HTTP server using Express:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * It should return plain text
 * When the URL path is /, it should display Hello Holberton School! in the page body
 * When the URL path is /students, it should display
 * This is the list of our students followed by the same content as the file 3-read_file_async.js
 * (with and without the database) - the name of the database must be passed as argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 */
const express = require('express');
const fs = require('fs');

const app = express();
const filename = process.argv[2];
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(err);
      else {
        const contents = data.split('\n');
        const output = [];
        output.push(`Number of students: ${contents.length - 1}`);
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
        Object.keys(students).forEach((key) => {
          output.push(`Number of students in ${key}: ${students[key].length}. List: ${students[key].join(', ')}`);
        });
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html');
  countStudents(filename).then((output) => {
    res.write('This is the list of our students\n');
    res.end(output.join('\n'));
  }).catch(() => {
    res.end('Cannot load the database');
  });
});
app.listen(1245);
module.exports = app;
