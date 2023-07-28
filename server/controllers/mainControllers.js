require("../models/databaseConnection");
const mongoose = require("mongoose");
const categoryModel = require("../models/categoryModel");
const recipeModel = require("../models/recipeModel");
const homepage = async (req, res) => {
  try {
    const limitnumber = 5;
    const categories = await categoryModel.find({}).limit(limitnumber);
    const latest = await recipeModel
      .find({})
      .sort({ _id: -1 })
      .limit(limitnumber);
    const chinese = await recipeModel
      .find({ category: "Chinese" })
      .limit(limitnumber);
    const american = await recipeModel
      .find({ category: "American" })
      .limit(limitnumber);
    const nepalese = await recipeModel
      .find({ category: "Nepalese" })
      .limit(limitnumber);
    const food = { latest, chinese, american, nepalese };

    res.render("index.ejs", { title: "Homepage", categories, food });
  } catch (e) {
    console.log("Failed to find data", +e);
  }
};
module.exports = homepage;

// const insertdata = async () => {
//   try {
//     const recipeModel = mongoose.model("recipe");
//     await recipeModel.insertMany([
//       {
//         name: "Chilli Cheap",
//         description: `First, take raw soya chaap and boil it. Cut it into pieces and deep fry.Next, add oil, ginger-garlic paste, and dry red chilli to a pan. Mix it well.Then add chopped onion and capsicum. Stir it, and add soy sauce, red chilli sauce, schezwan sauce, vinegar and some water. Let it come to a boil.Now throw in the chaap pieces and combine.Now, in a small bowl, add cornflour and water to make a slurry.Throw this in a pan and let it boil. Once done, take it out and serve!`,
//         ingredients: [
//           "5-6 Soya Chaap",
//           "1 tbsp Ginger-garlic paste",
//           "1 Dry red chilli1 medium Chopped onion",
//           "1 small Chopped Capsicum",
//           "1 tsp Soya Sauce1 tsp Red chilli sauce",
//           "1 tsp Schezwan sauce",
//           "1 and a half tsp Vinegar",
//         ],
//         category: "Chinese",
//         image: "chilli_cheap.jpg",
//       },
//     ]);
//   } catch (e) {
//     console.log("Failed to insert data", e.message);
//   }
// };
// insertdata();
