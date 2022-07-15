// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

const bookmarksController = require("./controllers/bookmarksController.js");

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
