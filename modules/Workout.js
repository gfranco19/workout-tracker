const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise completed"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of your exercise"
      },
      duration: {
        type: Number,
        required: "Enter your exercise duration"
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
});

workoutSchema.virtual("duration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;