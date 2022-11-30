const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    idMateria: {
        type: String,
        required: true
    },
    matriculaStudent: {
        type: String,
        required: true
    },
    statusStudent: {
        type: String,
        required: true
    },
    listedAt: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('List', listSchema)
