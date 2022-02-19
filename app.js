require("./database/mongoConfig");
const express = require("express");
const User = require("./models/User");
const app = express();

let array = ["KEKW"];

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send(`Hello my friend`);
});

app.get("/array", (req, res, next) => {
  res.send(`<h1>${array}</h1>`);
});

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, age } = req.body;
    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      age: age,
    });
    console.log(user);
    res.status(201);
    res.send("POST working properly!");
  } catch (err) {
    res.send(`Not working :( - ${err.message}`);
  }
});

module.exports = app;
