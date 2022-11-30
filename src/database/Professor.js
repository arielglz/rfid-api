const mongoose = require('mongoose');
//const classroomSchema = require('./ClassRooms')

const professorSchema = mongoose.Schema({
    id: {
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
    classrooms: [{
        classroomID: {
            type: String,
            required: true
        },
        buildingID: {
            type: Number,
            required: true
        }
    }]
})

module.exports = mongoose.model('Professor', professorSchema)
