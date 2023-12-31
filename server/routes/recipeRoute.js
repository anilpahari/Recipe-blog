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
const postRecipe = require("../controllers/postRecipe");
const deleteRecipe = require("../controllers/delete-recipe");
const contactMe = require("../controllers/cantactControllers");
const conatactDatabase = require("../controllers/contactDatabase");
const aboutMe = require("../controllers/aboutmeControllers");

router.get("/", homepage);
router.get("/categories", exploreCategory);
router.get("/recipe/:id", exploreRecipe);
router.get("/categories/:id", exploreCategoryId);
router.post("/search", searchItem);
router.get("/explore-latest", exploreLatest);
router.get("/explore-random", exploreRandom);
router.get("/submit-recipe", submitRecipe);
router.post("/submit-recipe", postRecipe);
router.get("/delete-recipe/:id", deleteRecipe);
router.get("/contact", contactMe);
router.post("/contact", conatactDatabase);
router.get("/about", aboutMe);
module.exports = router;
