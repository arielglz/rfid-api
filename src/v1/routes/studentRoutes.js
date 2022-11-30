const express =  require('express');
const router = express.Router();
const studentController = require("../../controllers/studentController");

router
    .get("/", studentController.getAllStudents)
    .get("/:uid", studentController.getStudentByUID)
    .post("/", studentController.createStudent)
    .post("/list", studentController.checkStudent)

module.exports = router;