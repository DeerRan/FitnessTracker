const router = require("express").Router();
const workoutmodel = require("../../models/fitnessModel");

router.get("/", (req, res) => {
    workoutmodel.findAll({})
        .sort({ day: 1 })
        .then(fitness_db => {
            res.json(fitness_db);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


module.exports = router;