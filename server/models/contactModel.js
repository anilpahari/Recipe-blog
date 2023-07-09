const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});
const contactModel = mongoose.model("contact_db", contactSchema);
module.exports = contactModel;
