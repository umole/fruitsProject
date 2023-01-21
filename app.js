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
});

const banana = new Fruit({
    name: "Banana",
    ratings: 6,
    review: "Love eating them."
});

const pawpaw = new Fruit({
    name: "Pawpaw",
    ratings: 7,
    review: "Absolutely lovely fruits."
});

// Fruit.insertMany([banana, pawpaw], (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("fruits added successfully!");
//     }
// });

//fruit.save().then(() => console.log("Saved new fruits"));

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = new mongoose.model("Person", personSchema);

const person = new Person({
    name: "John Cena",
    age: 37
});

//person.save().then(() => console.log("New person added to DB."));


Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {
        console.log(fruits);
    }
});

Person.find((err, people) => {
    if (err) {
        console.error(err);
    } else {
        console.log(people);
    }
})