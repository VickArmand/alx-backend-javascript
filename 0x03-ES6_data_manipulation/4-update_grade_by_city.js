/**
 * Create a function updateStudentGradeByCity that
 * returns an array of students for a specific city with their new grade
 * It should accept a list of students (from getListStudents),
 * a city (String), and newGrades (Array of “grade” objects) as parameters.
 * newGrades is an array of objects with this format:
 * { studentId: 31, grade: 78, }
 * If a student doesn’t have grade in newGrades, the final grade should be N/A.
 * You must use filter and map combined.
 */
function updateObject(studentObject, gradeObject) {
  Object.entries(gradeObject).map((entry) => {
    if (entry[0] === 'studentId' && entry[1] === studentObject.id) {
      studentObject.grade = gradeObject.grade;
    }
    return studentObject;
  });
}

export default function updateStudentGradeByCity(array, city, newGrades) {
  const result = array.filter((student) => student.location === city);
  result.forEach((student) => {
    newGrades.map((grade) => updateObject(student, grade));
  });
  return result.map((student) => { if (student.grade === undefined) student.grade = 'N/A'; return student; });
}
