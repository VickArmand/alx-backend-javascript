/**
 * Link the route / to the AppController
 * Link the route /students and /students/:major
 * to the StudentsController
 */
const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);
module.exports = router;
