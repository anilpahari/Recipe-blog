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
//         name: "Dak Galbi",
//         description: `Combine all the marinade ingredients in a bowl and mix them well. Pour the sauce over the chopped chicken and marinate for at least 30 mins. (Though I strongly recommend marinating it for at least 4 hrs, and if you can afford more time, for overnight for better flavored chicken. However if you are really short of time, 30 mins is OK.Preheat a large skillet on medium high heat and once heated add some cooking oil. Put all the vegetables and rice cakes into the skillet and add the meat on top. Cook them on medium high heat for 3-4 mins. Then reduce the heat to medium to medium low and cook further until all is cooked (about 10 – 15 mins). During cooking, stir often to avoid food sticking onto the pan. You can cover with a lid to speed up the cooking process`,
//         ingredients: [
//           "500g /1.1 pounds chicken thigh fillets (you can use a whole chicken or chicken breast instead)",
//           "1/2 medium sweet potato (180g/6.3 ounces)",
//           "1/2 small carrot (60g/2.1 ounces)",
//           "1/4 small cabbage (320g/0.7 pounds)",
//           "10 Korean perilla leaves (35g/1.2 ounces)",
//           "18 fresh Korean rice cakes pieces (175g/ 6.1 ounces)",
//         ],
//         category: "Korean",
//         image: "dak-galbi.jpg",
//       },
//     ]);
//   } catch (e) {
//     console.log("Failed to insert data", e.message);
//   }
// };
// insertdata();
