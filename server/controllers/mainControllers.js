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
//         name: "Panner butter masala",
//         description: `This Paneer Butter Masala recipe is a rich and creamy dish of paneer (Indian cottage cheese) in a tomato, butter and cashew sauce that is known here as “makhani gravy.” The acidity of the tomatoes and the sweetness of the cream make for a velvety, nearly addictive sauce.
//         Soak 18 to 20 cashews in ⅓ cup hot water for 20 to 30 minutes. While the cashews are soaking, you can prep the other ingredients. It’s time for chopping tomatoes, chopping and preparing the ginger-garlic paste, and slicing paneer into cubes.To make the ginger garlic paste, crush a 1 inch piece of peeled ginger with 3 to 4 small to medium-sized garlic cloves in a mortar & pestle. Continue crushing until it is a semi-fine or fine paste. Keep aside. After 20 to 30 minutes, drain the water and add the soaked cashews to a blender or mixer-grinder.Also, add 2 to 3 tablespoons fresh water (or as much as is required to blend to a fine paste).
// Blend to a smooth paste without any tiny bits or chunks of cashews. Remove the cashew paste from the blender and set it aside.In the same blender, add 2 cups of diced or roughly chopped tomatoes.Blend to a smooth tomato puree. Set aside.
// Note: Don’t add any water while blending the tomatoes.`,
//         ingredients: [
//           "Ripe, red & juicy tomatoes",
//           "Raw Cashews",
//           "Butter",
//           "Cream",
//           "Paneer",
//           "Spices & Herbs",
//         ],
//         category: "Indian",
//         image: "paneer-butter-masala.jpg",
//       },

//     ]);
//   } catch (e) {
//     console.log("Failed to insert data", e.message);
//   }
// };
// insertdata();
