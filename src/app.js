const express = require("express");

const app = express();

// app.get("/user", (req, res) => {
//   console.log("It is a Route Handler function in expressjs.");

//   res.send("Welcome Me! I am coming from server world !");
// });

// app.post("/user", (req, res) => {
//   res.send("Data saved successfully.");
// });


// abc and ac
app.get("/ab?c", (req, res) => {
  res.send("I am home page")
});


// abc and abbbbbbbbc
app.get("/ab+c", (req, res) => {
  res.send("I am home page")
});

// abcd and abRiyazkasdnkdjcd
app.get("/ab*cd", (req, res) => {
  res.send("I am home page")
});

// abcd and bc is optional
// if I run by localhost:777/ad then it will work.
app.get("/a(bc)?d", (req, res) => {
  res.send("I am home page")
});

// a and cat,mat
// if it finds a anywhere then it run
app.get("/a/", (req, res) => {
  res.send("I am home page")
});

// localhost:777/butterfly work
// localhost:777/butterfly1 not works
app.get("/.*fly$/", (req, res) => {
  res.send("I am home page")
});

// localhost:777/user?userId=1
// to get query parameters
app.get("/user", (req, res) => {
  console.log(req.query)
  res.send("I am home page")
});



app.use("/", (err, req, res, next) => {
  console.log("Error is- ", err);
});
// With array
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

app.get("/post", (req, res, next) => {
  console.log("First Post");
  next();
});

app.get("/post", (req, res, next) => {
  console.log("Second Post");
  res.send("Ho gya");
});

app.listen(7777, () => {
  console.log("App successfully started on port 7777");
});
