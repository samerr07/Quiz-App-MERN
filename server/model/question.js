const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
    questions : {
        type: Array,
        default:[]
    },
    answers : {
        type: Array,
        default:[]
    },
    createdAt : {
        type: Date,
        default: Date.now()
    }
});

exports.Questions = mongoose.model('Question', questionSchema);