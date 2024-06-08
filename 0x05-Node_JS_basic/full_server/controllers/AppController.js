/**
 * Create a class named AppController. Add a static method named getHomepage
 * The method accepts request and response as argument.
 * It returns a 200 status and the message Hello Holberton School!
 */
module.exports = class AppController {
  static getHomepage(request, response) {
    response.statusCode = 200;
    response.end('Hello Holberton School!');
    return response;
  }
};
