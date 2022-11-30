const studentService = require('../services/studentService');

const getAllStudents = (req, res) => {
    return;
}

const getStudentByUID = async (req, res) => {
    const { params: {uid} } = req;

    const student = await studentService.getStudentByUID(req.params.uid);
    console.log(student)
    res.send({ status: "OK", data: student });
}

const createStudent = (req, res) => {
    const { body } = req;

    const newStudent = {
        matricula: body.matricula,
        cedula: body.cedula,
        nombre: body.nombre,
        uid: body.uid,
        idMateria: body.materia
    }

    //console.log(newTeacher)

    const createdStudent = studentService.createStudent(newStudent)
    res.status(201)
        .send({
            status: "OK",
            data: createdStudent
        })
    
}

const checkStudent = async (req, res) => {
    const { uid } = req.body;

    const student = await studentService.getStudentByUID(uid);

    const checkStudent = {
        matriculaStudent: student.matriculaStudent,
        idMateria: student.materiaStudent
    }

    const checkedStudent = await studentService.checkList(checkStudent)
    console.log(checkedStudent)
    res.status(201)
        .send(checkedStudent) 
}

module.exports = {
    getAllStudents,
    getStudentByUID,
    createStudent,
    checkStudent
};