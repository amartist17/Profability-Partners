const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.get("/", async (req, res) => {
  res.render("index", { title: "Home" });
});
app.get("/about", async (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/services", async (req, res) => {
  res.render("services", { title: "Services" });
});
app.get("/team", async (req, res) => {
  res.render("team", { title: "Team" });
});
app.get("/contact", async (req, res) => {
  res.render("contact", { title: "Contact" });
});

module.exports = app;
