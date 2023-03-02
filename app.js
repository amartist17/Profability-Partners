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
app.get("/blog", async (req, res) => {
  res.render("blog", { title: "Blog" });
});
app.get("/blog-single", async (req, res) => {
  res.render("blogsingle", { title: "Blog Name" });
});
app.get("/case-study", async (req, res) => {
  res.render("casestudy", { title: "Case Study" });
});
app.get("/case-study-single", async (req, res) => {
  res.render("casestudysingle", { title: "Case Study Name" });
});
app.get("/testimonials", async (req, res) => {
  res.render("testimonials", { title: "Testimonials" });
});
app.get("/faqs", async (req, res) => {
  res.render("faqs", { title: "FAQs" });
});
app.all("*", (req, res) => {
  res.redirect("/");
});
module.exports = app;
