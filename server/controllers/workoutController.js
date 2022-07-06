const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//get all
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//get single
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout does not exist" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "Workout does not exist" });
  }
  res.status(200).json(workout);
};

//create new
const createWorkout = async (req, res) => {
  const { name, reps, weight } = req.body;
  try {
    const workout = await Workout.create({ name, reps, weight });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete

//update

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
};
