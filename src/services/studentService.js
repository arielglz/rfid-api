const { v4: uuid } = require('uuid');
const Student = require('../database/Student');
const List = require('../database/List');

const createStudent = (newStudent) => {
    const studentToInsert = {
        ...newStudent,
        createdAt: new Date().toLocaleDateString('en-US', { timeZone: 'GMT' })
    }

    const createdStudent = Student(studentToInsert).save()/*.then((data) => {return data});*/
    //console.log(createdProfesor)
    return studentToInsert;

    // prof.save()
    //     .then((data) => {return data});
}

const getStudentByUID = async (uid) => {
    // const profesor = Professor.find(uid, (error, data) => {
    //     if(error) {
    //         console.log(error);
    //     } else {
    //         console.log(data);
    //     }
    // });
    const returnedData = await Student.find({ 'uid': uid }).exec();
    dataStudent = {
        student: 'false',
        nombre: '',
        uid: uid
    }
    if(returnedData.length > 0 ){
        dataStudent = {
            student: 'true',
            nombreStudent: returnedData[0].nombre,
            matriculaStudent: returnedData[0].matricula,
            materiaStudent: returnedData[0].idMateria,
            uid: uid
        }
    } 
    //console.log(dataProfesor)
    return (dataStudent)
}

const checkList = async(student) => {
    const studentToCheck = {
        ...student,
        statusStudent: 'P',
        listedAt: new Date().toLocaleDateString('en-US', { timeZone: 'GMT' })
    }

    const checkedStudent = List(studentToCheck).save()/*.then((data) => {return data});*/
    return ({
        status: 'OK',
        msg: 'Student checked.'
    });
}

module.exports = {
    createStudent,
    getStudentByUID,
    checkList
}