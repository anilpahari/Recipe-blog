require("../models/databaseConnection");
const recipeModel = require("../models/recipeModel");
const exploreLatest = async (req, res) => {
  try {
    let limitnumber = 20;
    const explore = await recipeModel
      .find({})
      .sort({ _id: -1 })
      .limit(limitnumber);

    res.render("explore.ejs", { title: "exploreLatest", explore });
  } catch (e) {
    console.log("Failed to find data", +e);
  }
};
module.exports = exploreLatest;
