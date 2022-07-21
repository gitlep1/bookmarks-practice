const express = require("express");

const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmark.js");

bookmarks.use("/:id", (req, res, next) => {
  if (!bookmarksArray[req.params.id]) {
    res.status(404).send("Oops! No Bookmark with that ID.");
  }
  next();
});

bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

bookmarks.get("/:id", (req, res) => {
  let id = req.params.id;
  res.json(bookmarksArray[id]);
});

bookmarks.post("/", (req, res) => {
  bookmarksArray.push(req.body);
  res.json(bookmarksArray[bookmarksArray.length - 1]);
});

bookmarks.put("/:id", (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  bookmarksArray[id] = newData;
  res.json(bookmarksArray[id]);
});

bookmarks.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteData = bookmarksArray[id];

  bookmarksArray.splice(deleteData, 1);
  res.send("Bookmark deleted");
});

module.exports = bookmarks;
