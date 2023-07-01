const express = require("express");
const router = express.Router();
const homepage = require("../controllers/recipeControllers");
const exploreCategory = require("../controllers/categoryControllers");

router.get("/", homepage);
router.get("/categories", exploreCategory);
module.exports = router;
