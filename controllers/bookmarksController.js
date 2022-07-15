const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmark.js");

bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

bookmarks.get("/:id", (req, res) => {
  let id = req.params.id;
  if (id < 0 || id >= bookmarksArray.length) {
    res.status(404).send("Oops! No Bookmark with that ID.");
  }

  res.json(bookmarksArray[req.params.id]);
});

bookmarks.post("/", jsonParser, (req, res) => {
  let newBookmark = req.body;
  bookmarksArray.push(newBookmark);

  res.json(bookmarksArray);
});

module.exports = bookmarks;
