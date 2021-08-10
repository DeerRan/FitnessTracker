const express = require ('express');
const mongoose = require('mongoose');

const fitnessModel = require("./models/fitnessModel");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness_db", { useNewUrlParser: true });

const testData = [{
  workout: [{
    exercise: "Curl",
    weight: 25,
    sets: 6,
    reps: 10,
    exerciseduration: 15
  }],
  workoutduration: 0

  },

  {workout: [{
    exercise: "Preacher Curl",
    weight: 55,
    sets: 3,
    reps: 10,
    exerciseduration: 30
  }],
  workoutduration: 0
  },
];

fitnessModel
  .create(testData)
  .then(fitness_db => {
    console.log(fitness_db);
  })
  .catch(({ message }) => {
    console.log(message);
  });

