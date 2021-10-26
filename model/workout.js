const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },

  exercises: [
    {
        name: {
            type: String,
             required: "Enter the name of the exercise"
        },
        type: {
            type: String,
            required: "Enter the type of the exercise"
        },
        duration: {
            type: Number,
            required: "Enter the duration for the exercise"
        },
        weight: {
            type: Number,
            
        },
        reps: {
            type: Number,
            
        },
        sets: {
            type: Number,
            
        },
        distance: {
            type: Number,
        }
    }
],
});

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;