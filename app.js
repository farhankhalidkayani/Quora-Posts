const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let idcount = 0;
let posts = [
  {
    id: ++idcount,
    username: "Farhan",
    content: "I am Learning Backend Development with JavaScript",
  },
  {
    id: ++idcount,
    username: "Mithu",
    content: "I am Learning Backend Development with Python",
  },
  {
    id: ++idcount,
    username: "Zohaib",
    content: "I am Learning Frontent Development with ReactJs",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  let post = posts.find((p) => Number(id) === p.id);

  if (!post) {
    res.render("404.ejs");
  }
  res.render("post.ejs", { post });
});
app.get("/posts/new", (req, res) => {
  res.render("form.ejs");
});
app.post("/posts", (req, res) => {
  const id = ++idcount;
  const { username, content } = req.body;
  posts.push({ id, username, content });
  res.redirect("/posts");
});
app.listen(3000);
