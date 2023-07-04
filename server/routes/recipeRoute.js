const express = require("express");
const router = express.Router();
const homepage = require("../controllers/mainControllers");
const exploreCategory = require("../controllers/categoryControllers");
const exploreRecipe = require("../controllers/recipeControllers");
const exploreCategoryId = require("../controllers/catgoryControllersbyId");

router.get("/", homepage);
router.get("/categories", exploreCategory);
router.get("/recipe/:id", exploreRecipe);
router.get("/categories/:id", exploreCategoryId);
module.exports = router;
