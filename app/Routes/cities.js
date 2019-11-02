var express = require('express');
var Router = express.Router();

Router.use(express.urlencoded({extended: false}));

Router.get('/', (req, res) => {
    let DB = req.app.locals.DB;

    DB.collection("cities").find({}).toArray((err, data) => {
        if(err) {
            console.log("error occured while fetching the data from cities", err);
        } else {
            let result = [];
            for(let i = 0; i < data.length; i++) {
                result.push(data[i]);
                console.log(result);
            }
            
            // res.render('cities.hbs', {result: result});
            res.send(result);
        }
    });
})

module.exports = Router;
