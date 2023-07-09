const express = require("express");
const expressLayout = require("express-ejs-layouts");
const fileupload = require("express-fileupload");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const app = express();
require("./server/models/databaseConnection");
//const port = process.env.port || 3000;

app.use(express.urlencoded({ extends: true }));
app.use(express.static("public"));
app.use(expressLayout);
app.use(cookieParser("CookingBlog"));
app.use(
  session({
    secret: "CookingBlogSession",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());
app.use(fileupload());
app.set("view engine", "ejs");

app.set("layout", "./layouts/main");
const routes = require("./server/routes/recipeRoute");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Listen to port 3000");
});
