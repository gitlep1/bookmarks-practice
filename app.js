// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const cors = require("cors");
const app = express();

const bookmarksController = require("./controllers/bookmarksController.js");

// registers middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

// custom middle: next represents the "next" middleware to run
app.use((req, res, next) => {
  console.log("INCOMING: ", req.method, req.url);
  next();
});

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});
app.use("/bookmarks", bookmarksController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
