const express = require("express");
const router = express.Router();
const Workout = require("../modules/Workout");

module.exports = function() {

    router.get("/api/workouts/", (req,res) =>{
        Workout.find({})
        .sort({ date: -1 })
        .then(workoutDB => {
            res.json(workoutDB)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    })
  
  router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(workoutDB => {
      res.json(workoutDB);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },

    { new: true, runValidators: true }
  )
    .then(workoutDB => {
      res.json(workoutDB);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(workoutDB => {
      console.log(workoutDB)
      res.json(workoutDB);
    })
    .catch(err => {
      res.json(err);
    });
});
};