const nodemailer = require('nodemailer'); 
const sendMail = require("./mail");
const express = require('express');
const path = require("path");
require('dotenv').config({path:"./.env"});

const app = express(); 

const PORT = process.env.PORT || 8888; 

// DATA PARSING 
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json())
app.use(express.static("public"));

app.post("/email", (req, res)=>{
  // TODO SEND EMAIL 
  const {subject, email, text} = req.body;
  console.log(req.body)
  sendMail(email, subject, text, (err, data)=> {
    if (err) {
      res.status(500).json({message: "Internal Error"});
    } else {
      res.json({message: "Email Sent!"})
    }
  });
  
})

// ESTABLISHING OUR PORT 
app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(PORT, ()=> console.log("Server is starting on PORT " + PORT))
