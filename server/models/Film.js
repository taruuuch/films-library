const { Schema, model } = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    release_year: {
        type: Number,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    stars: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

module.exports = model('Film', schema)