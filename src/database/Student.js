const mongoose = require('mongoose');
//const classroomSchema = require('./ClassRooms')

const studentSchema = mongoose.Schema({
    matricula: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    idMateria: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema)
