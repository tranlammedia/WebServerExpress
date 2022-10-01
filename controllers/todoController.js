const catchAsync = require("../midlewares/async")
const TodoSchema = require("../models/todo")
const ApiError = require("../utils/ApiError")

exports.getTodos= catchAsync(async (req, res) => {
    const todos = await TodoSchema.find()
    if (todos.length) {
        throw new ApiError(400, "No Todos")
    }
    res.status(200).json({
        success: true,
        data: todos
    })
})

exports.createTodo = catchAsync(async (req,res)=> {
    const {title, author, desc} = req.body
    const todo = await TodoSchema.create({
        title,
        author,
        desc,
        isCompleted: false
    })
    // .catch((err) => {
    //     const errors = err.errors
    //     const keys = Object.keys(errors)
    //     const errorObj = {}
    //     keys.map((key) => {
    //         errorObj[key] = errors[key].message
    //     })
    //     // res.json({
    //         //     success: false,
    //         //     message : errorObj
    //         // })
    //     })
     
    res.status(201).json(todo)
})

exports.deleteTodo = async (req, res)=> {
    const {id} = req.params
    const todoDeleted = await TodoSchema.findByIdAndDelete(id).catch((err) => {
        res.json({
            success: false
        })
    })
    res.json({
        success: true,
        dataDel: todoDeleted
    })
}

exports.updateTodo = async (req, res) => {
    const {id} = req.params
    const {title, desc} = req.body
    const todoUpdate = await TodoSchema
        .findByIdAndUpdate(id, {title, desc})
        .catch((err) => {
            res.status(400).json({
                success: false
            })
        })
    res.status(200).json({
        success: true,
        dataUpdate: todoUpdate
    })
}