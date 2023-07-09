const contactModel = require("../models/contactModel");
require("../models/databaseConnection");

const conatactDatabase = async (req, res) => {
  try {
    const newcontactModel = new contactModel({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await newcontactModel.save();
    res.redirect("/contact");
  } catch (e) {
    console.log("Failed to find data", +e);
  }
};
module.exports = conatactDatabase;
