require("../models/databaseConnection");
//const mongoose = require("mongoose");
const categoryModel = require("../models/categoryModel");
const exploreCategory = async (req, res) => {
  try {
    const limitnumber = 10;
    const categories = await categoryModel.find({}).limit(limitnumber);
    res.render("categories.ejs", { title: "exploreCategory", categories });
  } catch (e) {
    console.log("Failed to find data", +e);
  }
};

module.exports = exploreCategory;
