const mongoose = require("mongoose");

const todoScheme = new mongoose.Schema({
    todoName: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: String
    }
});

const todoModel = mongoose.model("todos", todoScheme);

module.exports = todoModel;