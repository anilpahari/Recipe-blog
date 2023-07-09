const contactMe = async (req, res) => {
  try {
    res.render("contact.ejs", { title: "contactMe" });
  } catch (e) {
    console.log("Failed to find data", +e);
    //req.flash("infoSubmit", "Thank for you message.");
  }
};
module.exports = contactMe;
