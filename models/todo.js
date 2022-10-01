const mongoose = require("mongoose")

const {Schema} = mongoose

const todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        default: "new title"
    },
    author : {
        type: String,
        required: [true, "author is required"],
        default: "anoy"
    },
    desc: {
        type: String
    },
    isCompleted: Boolean
})

const TodoSchema = mongoose.model('todos', todoSchema)

module.exports = TodoSchema