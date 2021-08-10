const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessSchema = new Schema ({
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: true
        },

        weight: {
            type: Number,
            required: true,
            match: [/[0-9]{1,3}/, "Please enter in a whole number in without lbs"]
        },

        sets: {
            type: Number,
            required: true
        },

        reps: {
            type: Number,
            required: true
        },

        duration: {
            type: Number,
            required: true
        }
    }],
    
    durationsum: {
        type: Number,
        default: 0,
    },

    day: {
        type: Date,
        default: Date.now
    }
})

fitnessSchema.methods.durationadd = function () {
    for (let i = 0; i < this.exercises.length; i++)
    {
        this.durationsum += this.exercises[i].duration;
    }
    return this.durationsum;
}

const workoutmodel = mongoose.model("workoutmodel", fitnessSchema);

module.exports = workoutmodel;