const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/new-database", {
    authSource: "admin",
    user: "user",
    pass: "admin1",
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.error(err));

module.exports = mongoose.connection;
