const recipeModel = require("../models/recipeModel");
const categoryModel = require("../models/categoryModel");
const exploreCategoryId = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = categoryModel.find({});

    const limitnumber = 10;
    const categorybyId = await recipeModel
      .find({ category: categoryId })
      .limit(limitnumber);

    res.render("categoriesid.ejs", {
      title: "exploreCategory",
      categorybyId,
      category,
    });
  } catch (e) {
    console.log("Failed to find data", +e);
  }
};

module.exports = exploreCategoryId;
