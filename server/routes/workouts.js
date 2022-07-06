const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//get all
router.get("/", getWorkouts);

//get specific
router.get("/:id", getWorkout);

//add new
router.post("/", createWorkout);

//del
router.delete("/:id", (req, res) => {
  res.json({ mssg: "del wo" });
});

//update
router.patch("/:id", (req, res) => {
  res.json({ mssg: "upd wo" });
});

module.exports = router;
