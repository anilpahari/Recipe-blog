require("../models/databaseConnection");
const recipeModel = require("../models/recipeModel");
const searchItem = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    const search = await recipeModel.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });

    res.render("search.ejs", { title: "searchItem", search });
  } catch (e) {
    console.log("Failed to find data", +e);
  }
};
module.exports = searchItem;
