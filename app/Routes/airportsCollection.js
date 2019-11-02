var express = require('express');
var Router = express.Router();

const cities = require('../fileRead.js');

Router.use(express.urlencoded({extended: false}));

Router.get('/', (req, res) => {
    let DB = req.app.locals.DB;

    let data = cities.airports;

    DB.collection("airports").insert(data, (err) => {
        if(err) {
            res.send("error occured while inserting data into airports", err);
        } else {
            res.send("Successfully data inserted into airports collection");
        }
    });
})

module.exports = Router;
