const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  description: {
    type: String,
    required: [true, "Please enter name"],
  },

  ingredients: {
    type: Array,
    required: [true, "Please enter name"],
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
      "Other's",
    ],
    required: [true, "Please enter name"],
  },

  image: {
    type: String,
    require: [true, "Please upload an image"],
  },
});
recipeSchema.index({ name: "text", description: "text" });
const recipeModel = mongoose.model("recipe", recipeSchema);
module.exports = recipeModel;