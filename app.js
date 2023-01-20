const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name: String,
    ratings: Number,
    review: String
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    ratings: 7,
    review: "Not bad for a common apple."
})

fruit.save().then(() => console.log("Saved new fruits"));