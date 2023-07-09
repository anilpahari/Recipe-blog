const aboutMe = async (req, res) => {
  res.render("aboutme.ejs", { title: "About me" });
};
module.exports = aboutMe;
