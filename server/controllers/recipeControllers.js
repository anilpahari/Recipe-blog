require("../models/databaseConnection");
const mongoose = require("mongoose");
const recipeModel = require("../models/recipeModel");
const exploreRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await recipeModel.findById(recipeId);
    res.render("recipe.ejs", { title: "exploreRecipe", recipe });
  } catch (e) {
    console.log("Failed to find data", +e);
  }
};
module.exports = exploreRecipe;
