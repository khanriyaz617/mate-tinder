const express = require("express");

const app = express();

// app.get("/user", (req, res) => {
//   console.log("It is a Route Handler function in expressjs.");

//   res.send("Welcome Me! I am coming from server world !");
// });

// app.post("/user", (req, res) => {
//   res.send("Data saved successfully.");
// });

app.use("/user", [
  (req, res, next) => {
    //   res.send("I am route handler callback function 1.");
    next();
  },
  (req, res, next) => {
    res.send("I am route handler callback function 2.");
    s;
  },
]);

app.listen(7777, () => {
  console.log("App successfully started on port 7777");
});
