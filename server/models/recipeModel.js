const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name of your recipe you want to add"],
  },
  description: {
    type: String,
    required: [true, "Please the description of your recipe"],
  },

  ingredients: {
    type: Array,
    required: [true, "You forget to add ingredients"],
  },
  category: {
    type: String,
    enum: [
      "American",
      "Nepalese",
      "Indian",
      "Mexican",
      "Thai's",
      "Chinese",
      "Spanish",
      "Korean",
      "Other's",
    ],
    required: [true, "Enter the category of your recipe"],
  },

  image: {
    type: String,
    require: [true, "Please upload an image of your recipe"],
  },
});
recipeSchema.index({ name: "text", description: "text" });
const recipeModel = mongoose.model("recipe", recipeSchema);
module.exports = recipeModel;
