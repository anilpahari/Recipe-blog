const submitRecipe = async (req, res) => {
  const errMsg = req.flash("infoErrors");
  const successMsg = req.flash("infoSubmit");
  res.render("submit.ejs", { title: "submitRecipe", errMsg, successMsg });
};
module.exports = submitRecipe;
