require("../models/databaseConnection");
const recipeModel = require("../models/recipeModel");
const deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    await recipeModel.findByIdAndDelete(recipeId);
    res.redirect("/");
  } catch (e) {
    console.log("Failed to find data", +e);
  }
};
module.exports = deleteRecipe;
