/**
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * It should return plain text
 * When the URL path is /, it should display Hello Holberton School! in the page body
 * When the URL path is /students, it should display
 * This is the list of our students followed by the same content as the file 3-read_file_async.js
 * (with and without the database) - the name of the database must be passed as argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 */
const http = require('http');
const fs = require('fs');

const filename = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(err);
      else {
        const output = [];
        const contents = data.toString().split('\n');
        let length = 0;
        const students = {};
        for (let i = 1; i < contents.length; i += 1) {
          if (contents[i]) {
            const row = contents[i].toString().split(',');
            students[row[3]] = [];
            length += 1;
          }
        }
        output.push(`Number of students: ${length}`);
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

const app = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  switch (request.url) {
    case '/':
      response.writeHead(200);
      response.end('Hello Holberton School!');
      break;
    case '/students':
      response.write('This is the list of our students\n');
      countStudents(filename).then((output) => {
        response.writeHead(200);
        response.end(output.join('\n'));
      }).catch(() => {
        response.writeHead(404);
        response.end('Cannot load the database');
      });
      break;
    default:
      response.writeHead(404);
      response.end('Not Found');
  }
}).listen(1245);

module.exports = app;
