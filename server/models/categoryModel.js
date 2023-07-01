const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  image: {
    type: String,
    require: [true, "Please upload an image"],
  },
});
const categoryModel = mongoose.model("recipe_db", categorySchema);
module.exports = categoryModel;
