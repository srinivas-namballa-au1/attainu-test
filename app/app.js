const express = require('express');
const mongodb = require('mongodb');
var bodyParser = require("body-parser");

const app = express();

const citiesInsertion = require('./Routes/citiesCollection.js');
const airportsInsertion = require('./Routes/airportsCollection.js');
const cities = require('./Routes/cities.js');
const airports = require('./Routes/airports.js');

// const city = require('./fileRead.js');
// console.log(city);

app.use(bodyParser());
app.set("view engine", ".hbs");

//connect to mongodb
var DB;
var DB_URL = 'mongodb://127.0.0.1:27017/airports';

var mongoClient = new mongodb.MongoClient(DB_URL, {useNewUrlParser: true});

mongoClient.connect((err) => {
    if(err) {
        console.log("Error connecting to MongoDB: ", err);
    } else {
        console.log("Connection to MongoDB database airports established");
    }
    DB = mongoClient.db("airports");

    //save the DB variable for all routes
    app.locals.DB = DB;
});

//To insert data into cities collection
app.use('/insertCities', citiesInsertion);

//To insert data into airports collection
app.use('/insertAirports', airportsInsertion);

//To display all cities
app.use('/cities', cities);

//To display all airports
app.use('/airports', airports);

// app.listen(3001, () => console.log('app running on port 3000'));

module.exports = app;