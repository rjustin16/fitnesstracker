const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: 'Enter the type of exercise',
        },
        name: {
          type: String,
          trim: true,
          required: 'Enter the name exercise ',
        },
        duration: {
          type: Number,
          required: 'Enter the exercise duration in minutes',
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
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((sum, exercise) => sum + exercise.duration, 0);
});

const workout = mongoose.model('WorkoutSchema', WorkoutSchema);
module.exports = workout;