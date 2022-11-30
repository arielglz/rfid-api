const professorService = require('../services/professorService');

const getAllProfessors = (req, res) => {
    return;
}

const getProfesorByUID = async (req, res) => {
    const { params: {uid} } = req;

    const profesor = await professorService.getProfesorByUID(req.params.uid);
    console.log(profesor)
    res.send({ status: "OK", data: profesor });
}

const createProfesor = (req, res) => {
    const { body } = req;

    const newTeacher = {
        cedula: body.cedula,
        nombre: body.nombre,
        uid: body.uid,
        classrooms: body.classrooms
    }

    //console.log(newTeacher)

    const createdProfessor = professorService.createProfesor(newTeacher)
    res.status(201)
        .send({
            status: "OK",
            data: createdProfessor
        })
    
}

module.exports = {
    getAllProfessors,
    getProfesorByUID,
    createProfesor
};