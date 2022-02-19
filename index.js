const express = require("express");
const app = express();
const bodyParser = require('body-parser');

let array = [];

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send(`Hello my friend`);
});

app.get("/array", (req, res, next) => {
  res.send(`<h1>${array}</h1>`)
});

app.post("/add", (req, res) => {
  try {
    console.log(req.body);
    const { abc } = req.body;
    array.push(abc);
    res.send("POST working properly!");
  } catch (err) {
    res.send(`Not working :( - ${err.message}`);
  }
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
