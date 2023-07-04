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
//         name: "Pumpkin Pickle ",
//         description: `Cut the skin of the pumpkin and cut the pumpkin in small pieces.Heat the pan, add the oil and also add Fenugreek seed, and thyme seed.When they turn golden brown add chilies.Then Add the pumpkin, turmeric and salt and finally cover the pan and let it cook until pumpkin is well cooked.Now add lemon juice`,

//         ingredients: [
//           "Yellow pumpkin -200 gram",
//           "Fenugreek seed- ½ tea spoon",
//           "Thyme seed- ½ teaspoon",
//           "Green chilies -3",
//           "Salt- to taste",
//           "Turmeric- ½ teaspoon",
//           "Red chili powder- 1 teaspoon (or as desired)",
//           "Lemon -1 (if you have chook Amilo is the best)",
//           "Oil -2 tablespoon",
//         ],
//         category: "Nepalese",
//         image: "Farsi-ko-achar.jpg",
//       },
//       {
//         name: "Chinese steak & tofu stew ",
//         description: `Get your prep done first, for smooth cooking. Chop the steak into 1cm chunks, trimming away and discarding any fat.Peel and finely chop the garlic and ginger and slice the chilli. Trim the spring onions, finely slice the top green halves and put aside, then chop the whites into 2cm chunks. Peel the carrots and mooli or radishes, and chop to a similar size.Place a large pan on a medium-high heat and toast the Szechuan peppercorns while it heats up. Tip into a pestle and mortar, leaving the pan on the heat.Place the chopped steak in the pan with 1 tablespoon of groundnut oil. Stir until starting to brown, then add the garlic, ginger, chilli, the white spring onions, carrots and mooli or radishes.

//         Cook for 5 minutes, stirring regularly, then stir in the chilli bean paste for 30 seconds until dark. Pour in the stock and simmer for 10 minutes.Meanwhile, drain the beans, put them into a pan with the rice and a pinch of sea salt, and cover by 1cm with cold water. Place on a high heat, bring to the boil, then simmer until the water level meets the rice. Cover and leave on the lowest heat for 12 minutes, or until cooked through, stirring occasionally.Taste the stew and season to perfection. Mix the cornflour with 2 tablespoons of cold water until combined, then stir into the stew.

//         Trim and stir in the broccoli. Chop the tofu into 2cm chunks and drop them in, then pop a lid on and keep on a low heat for 5 to 8 minutes while the stew thickens up and the broccoli just cooks through.Serve the stew scattered with the sliced green spring onions, with the sticky rice and beans on the side. Finely crush and scatter over some Szechuan pepper. Nice with drips of chilli oil, to taste.`,

//         ingredients: [
//           "250g rump or sirloin steak",
//           "2 cloves of garlic",
//           "4cm piece of ginger",
//           "2 fresh red chilli",
//           "1 bunch of spring onions",
//           "2 large carrots",
//           "250g mooli or radishes",
//           "1 heaped teaspoon Szechuan peppercorns",
//           "groundnut oil",
//           "2 tablespoons Chinese chilli bean paste",
//           "1 litre veg stock",
//           "1 x 400g tin of aduki beans",
//           "250g pudding or risotto rice",
//           "1 tablespoon cornflour",
//           "200g tenderstem broccoli",
//           "350g firm silken tofu",
//         ],
//         category: "Chinese",
//         image: "chinese-steak.jpg",
//       },
// ]);
//   } catch (e) {
//     console.log("Failed to insert data", e.message);
//   }
// };
// insertdata();
