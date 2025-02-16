const express = require("express");

const app = express();


app.get("/user", (req, res)=>{
    res.send("Welcome Me! I am coming from server world !")
})

app.post("/user", (req, res)=>{
    res.send("Data saved successfully.");
})

app.listen(7777, ()=>{
    console.log('App successfully started on port 7777');
})
