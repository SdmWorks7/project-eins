const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

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

app.get("/testListing", async (req, res)=>{
    
 let sampleListing = new Listing({
    title: "My New Villa",
    description: "By the beach",
    price: 1200,
    location: "Calagute, Goa",
    country: "India",
 });

 await sampleListing.save();
 console.log("sample was saved");
 res.send("succesfull testing");

});

app.listen(8000, ()=> {
    console.log("the server is running");
});