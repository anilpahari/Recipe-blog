require("../models/databaseConnection");
//const mongoose = require("mongoose");
const categoryModel = require("../models/categoryModel");
const homepage = async (req, res) => {
  try {
    const limitnumber = 5;
    const categories = await categoryModel.find({}).limit(limitnumber);
    res.render("index.ejs", { title: "Homepage", categories });
  } catch (e) {
    console.log("Failed to find data", +e);
  }
};
module.exports = homepage;

// const insertdata = async () => {
//   try {
//     const categoryModel = mongoose.model("recipe_db");
//     await categoryModel.insertMany([
//       {
//         name: "American",
//         image: "american.jpg",
//       },
//       {
//         name: "Chinese",
//         image: "chinese.jpg",
//       },
//       {
//         name: "Nepalese",
//         image: "nepali.jpg",
//       },
//       {
//         name: "Thai's",
//         image: "thai.jpg",
//       },
//       {
//         name: "Indian",
//         image: "indian.jpg",
//       },
//     ]);
//   } catch (e) {
//     console.log("Failed to insert data", +e);
//   }
// };
// insertdata();
