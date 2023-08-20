const express = require('express');
const mongoose = require('mongoose');
const server = express();
const cors = require('cors');
const questionRouter = require("./routes/questionRoute")
const resultRouter = require("./routes/resultRoute")

const corsOptions = {
    origin:true,
    credentials:true,
  }
//Connect database

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://codersam:DzyOhC6dTdCTZJjC@cluster0.5bbn3qh.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database Connected")
}

//middleware
server.use(express.json())
server.use(cors(corsOptions))
server.use("/api/v1/que",questionRouter.router)
server.use("/api/v1/res",resultRouter.router)

server.get("/",(req,res)=>{
    res.send("Hello World")
})



//listen to port

server.listen(8080,()=>{
    console.log("Server Started")
})