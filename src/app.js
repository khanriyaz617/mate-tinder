const express = require("express");

const app = express();

app.use("/test", (req, res)=>{
    console.log('Welcome Me! I am coming from server world !');
    res.send("Welcome Me! I am coming from server world !")
})
app.use("/hello", (req, res)=>{
    res.send("Hello hello hello! Perfect")
})

app.listen(7777, ()=>{
    console.log('App successfully started on port 7777');
})
