const express = require("express");
const mongoose = require("mongoose")
const url = "mongodb://localhost/Users_db"

const app = express()

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on("open", () =>{
    console.log("conectado");  
})

app.use(express.json())

const userRouter = require("./routers/users")
app.use("/users", userRouter)

app.listen(9000, () =>{
    console.log("partió el server");
})