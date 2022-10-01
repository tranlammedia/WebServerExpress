const express = require("express")
const mongoose = require("mongoose")

const { PORT, MONGODB } = require("./config")
const connectDB = require("./config/db")
const catchError = require("./midlewares/error")

const todoRoutes = require('./routes/todoRouter')

const app = express()

app.use(express.json())

//connect DB
connectDB()

//routes

app.use("/api/v1/todo", todoRoutes) 

app.use(catchError)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})