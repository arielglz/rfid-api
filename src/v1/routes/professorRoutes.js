const express =  require('express');
const router = express.Router();
const professorController = require("../../controllers/professorController");

router
    .get("/", professorController.getAllProfessors)
    .get("/:uid", professorController.getProfesorByUID)
    .post("/", professorController.createProfesor)

module.exports = router;