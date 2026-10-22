const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main()
    .then(()=>{
    console.log("connected to the database");
    })
    .catch((err)=>{
        console.log(err.message);
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req, res)=>{
    res.send("hi, this is the root running");
})

app.listen(8000, ()=> {
    console.log("the server is running");
});