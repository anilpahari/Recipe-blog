const express = require("express");
const router = express.Router();
const homepage = require("../controllers/mainControllers");
const exploreCategory = require("../controllers/categoryControllers");
const exploreRecipe = require("../controllers/recipeControllers");
const exploreCategoryId = require("../controllers/catgoryControllersbyId");
const searchItem = require("../controllers/searchItem");
const exploreLatest = require("../controllers/exploreLatest");

const exploreRandom = require("../controllers/exploreRandom");
const submitRecipe = require("../controllers/submitRecipe");

router.get("/", homepage);
router.get("/categories", exploreCategory);
router.get("/recipe/:id", exploreRecipe);
router.get("/categories/:id", exploreCategoryId);
router.post("/search", searchItem);
router.get("/explore-latest", exploreLatest);
router.get("/explore-random", exploreRandom);
router.get("/submit-recipe", submitRecipe);
module.exports = router;
