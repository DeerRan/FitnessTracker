const express = require ('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(require("./controllers/index"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness_db", {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App started on ${PORT}`)
})