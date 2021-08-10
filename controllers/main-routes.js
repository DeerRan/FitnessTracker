const router = require('express').Router();
const path = require("path");

const betterDIR = "C:/Users/Darre/Desktop/BootCamp/Homework/Homework 16 Fitness Tracker/FitnessTracker/"

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(betterDIR + 'public/index.html'))
    }
    catch (err) {
      res.status(500).json(err)
    }
})

router.get('/stats', async (req, res) => {
    try {
        res.sendFile(path.join(betterDIR + 'public/stats.html'))
    }
    catch (err) {
      res.status(500).json(err)
    }
})

router.get('/exercise', async (req, res) => {
    try {
      console.log(__dirname)  
      res.sendFile(path.join(betterDIR + 'public/exercise.html'));
    }
    catch (err) {
      throw err
    }
})

module.exports = router;