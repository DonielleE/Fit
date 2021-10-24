const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
        name: {
            type: String,
            // required: "Enter the name of the exercise"
        },
        type: {
            type: String,
            // required: "Enter the type of the exercise"
        },
        duration: {
            type: Number,
            // required: "Enter the duration for the exercise"
        },
        weight: {
            type: Number,
            // required: "Enter a weight"
        },
        reps: {
            type: Number,
            // required: "Enter the amount of reps for the exercise"
        },
        sets: {
            type: Number,
            // required: "Enter the amount of sets for the exercise"
        },
        distance: {
            type: Number,
        }
    }
],
});

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;