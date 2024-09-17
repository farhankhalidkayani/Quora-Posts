const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set(express.json());

app.get("/", (req, res) => {
  res.send("Server Working");
});
app.listen(3000);
