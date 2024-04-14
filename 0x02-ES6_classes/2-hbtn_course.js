/**
 * Implement a class named HolbertonCourse:
 * Constructor attributes: name (String), length (Number), students (array of Strings)
 * Make sure to verify the type of attributes during object creation
 * Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
 * Implement a getter and setter for each attribute.
 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') throw TypeError('Name must be a string');
    if (typeof (length) !== 'number') throw TypeError('Length must be a number');
    if (!(students instanceof Array)) throw TypeError('Students must be an array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
