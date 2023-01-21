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
    name: {
        type: String,
        required: [true, 'Why no name?']
    },
    age: {
        type: Number,
        min: [18, 'Too young']
    },
    favoriteFruit: fruitSchema
});

const Person = new mongoose.model("Person", personSchema);

const person = new Person({
    name: "Dwayn Johnson",
    age: 18,
    favoriteFruit: fruit
});

// Fruit.deleteOne({name: 'Banana'}, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("(Banana) successfully deleted");
//     }
// });

Person.updateOne({name: 'John Cena'}, {favoriteFruit: pawpaw}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Updated successfully");
    }
});

//person.save().then(() => console.log("New person added to DB."));

// Person.deleteOne({ name: 'Mike Tyson' }, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("(Mike Tyson) Successfully deleted");
//     }
// });



Fruit.find((err, fruits) => {
    let fruitNames = []
    try {
        for (eachFruit of fruits) {
            const eachFruitName = eachFruit.name;
            fruitNames.push(eachFruitName);
        }
        console.log(fruitNames);
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
});

Person.find((err, people) => {
    try {
        let peopleNames = [];
        for (eachPerson of people) {
            const eachPersonName = eachPerson.name;
            console.log(eachPersonName);
        }
    } catch (err) {
        console.error(err);
    } finally {
        //mongoose.connection.close();
    }
});


