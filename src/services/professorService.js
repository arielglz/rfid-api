const { v4: uuid } = require('uuid');
const Professor = require('../database/Professor');

const createProfesor = (newProfessor) => {
    const professorToInsert = {
        ...newProfessor,
        id: uuid(),
        createdAt: new Date().toLocaleDateString('en-US', { timeZone: 'GMT' })
    }

    const createdProfesor = Professor(professorToInsert).save()/*.then((data) => {return data});*/
    //console.log(createdProfesor)
    return professorToInsert;

    // prof.save()
    //     .then((data) => {return data});
}

const getProfesorByUID = async (uid) => {
    // const profesor = Professor.find(uid, (error, data) => {
    //     if(error) {
    //         console.log(error);
    //     } else {
    //         console.log(data);
    //     }
    // });
    const returnedData = await Professor.find({ 'uid': uid }).exec();
    dataProfesor = {
        profesor: 'false',
        nombre: '',
        uid: uid
    }
    if(returnedData.length > 0 ){
        dataProfesor = {
            profesor: 'true',
            nombreProfesor: returnedData[0].nombre,
            uid: uid
        }
    } 
    //console.log(dataProfesor)
    return (dataProfesor)
}

module.exports = {
    createProfesor,
    getProfesorByUID
}