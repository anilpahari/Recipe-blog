const submitRecipe = async (req, res) => {
  try {
    res.render("submit.ejs", { title: "submitRecipe" });
  } catch (e) {
    console.log("Failed to find data", +e);
  }
};
module.exports = submitRecipe;
