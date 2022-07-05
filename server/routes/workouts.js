const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "get all" });
});

router.get("/:_id", (req, res) => {
  res.json({ mssg: "get single" });
});

router.post("/:_id", (req, res) => {
  res.json({ mssg: "post new" });
});

router.delete("/:_id", (req, res) => {
  res.json({ mssg: "del wo" });
});

router.patch("/:_id", (req, res) => {
  res.json({ mssg: "upd wo" });
});

module.exports = router;
