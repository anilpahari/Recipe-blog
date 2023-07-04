const mongoose = require("mongoose");
require("dotenv").config();
require("./categoryModel");
require("./recipeModel");
mongoose
  .connect(process.env.mongo_connect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to mongo db suceesful.");
  })
  .catch((e) => {
    console.log("Connection Failed..");
  });
