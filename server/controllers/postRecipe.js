const recipeModel = require("../models/recipeModel");
const postRecipe = async (req, res) => {
  try {
    let imageUplodeFile;
    let newImageName;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
      console.log("No files where uploaded.");
    } else {
      imageUplodeFile = req.files.image;
      newImageName = Date.now() + imageUplodeFile.name;
      uploadPath =
        require("path").resolve("./") + "/public/uploads/" + newImageName;
      imageUplodeFile.mv(uploadPath, function (err) {
        if (err) {
          console.log("Failed to insert image", err);
        }
      });
    }
    const newrecipeModel = new recipeModel({
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients,
      category: req.body.category,
      image: newImageName,
    });
    await newrecipeModel.save();
    req.flash("infoSubmit", "Recipe has been added.");
    res.redirect("/submit-recipe");
  } catch (error) {
    req.flash("infoErrors", error);
    res.redirect("/submit-recipe");
  }
};
module.exports = postRecipe;
