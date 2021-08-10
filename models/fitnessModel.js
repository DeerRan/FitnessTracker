const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessSchema = new Schema ({
    workout: [{
        exercise: {
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

        exerciseduration: {
            type: Number,
            required: true
        }
    }],
    
    workoutduration: {
        type: Number,
        default: 0,
    },

    date: {
        type: Date,
        default: Date.now
    }
})

fitnessSchema.methods.durationadd = function () {
    for (let i = 0; i < this.workout.length; i++)
    {
        this.workoutduration += this.workout[i].exerciseduration;
    }
    return this.workoutduration;
}

const fitnessModel = mongoose.model("fitnessModel", fitnessSchema);

module.exports = fitnessModel;