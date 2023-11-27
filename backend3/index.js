const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "home.html"));
});

app.post("/form", (req, res) => {
  const { fname } = req.body;
  const { lname } = req.body;
  console.log(req.body);
  console.log(fname);
  console.log(lname);
  res.redirect("/");
});
app.get("/page1", (req, res) => {
  res.sendFile(path.resolve(__dirname, "page1.html"));
});
app.get("/form", (req, res) => {
  res.sendFile(path.resolve(__dirname, "form.html"));
});
app.listen(3030, () => {
  console.log("Server is up");
});
