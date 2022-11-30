const roleService = require('../services/roleService');
const profesorService = require('../services/professorService');
const studentService = require('../services/studentService');

const verifyRole = async (req, res) => {
    const { uid } = req.body;
    const { profesor, nombreProfesor } = await profesorService.getProfesorByUID(uid);
    const { student, nombreStudent, matriculaStudent } = await studentService.getStudentByUID(uid);

    if(profesor == 'true') {
        res.status(200).json({
            status: 'OK',
            rol: 'PROFESOR',
            nombre: nombreProfesor
        })
    } else if(student == 'true') {
        res.status(200).json({
            status: 'OK',
            rol: 'ESTUDIANTE',
            nombre: nombreStudent,
            matricula: matriculaStudent
        })
    } else {
        res.status(404).json({
            status: 'ERROR',
            msg: 'UID not found'
        })
    }

}

module.exports = {
    verifyRole
};