require("../models/databaseConnection");
const recipeModel = require("../models/recipeModel");
const exploreRandom = async (req, res) => {
  try {
    let count = await recipeModel.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    let recipe = await recipeModel.findOne().skip(random).exec();

    res.render("random.ejs", { title: "exploreRandom", recipe });
  } catch (e) {
    console.log("Failed to find data", +e);
  }
};
module.exports = exploreRandom;
