const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let posts = [
  {
    username: "Farhan",
    content: "I am Learning Backend Development with JavaScript",
  },
  {
    username: "Mithu",
    content: "I am Learning Backend Development with Python",
  },
  {
    username: "Zohaib",
    content: "I am Learning Frontent Development with ReactJs",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});
app.listen(3000);
