var express = require('express');
var Router = express.Router();

Router.use(express.urlencoded({extended: false}));

Router.get('/', (req, res) => {
    let DB = req.app.locals.DB;

    DB.collection("airports").find({}, (err, data) => {
        if(err) {
            res.send("error occured while fetching the data from airports", err);
        } else {
            res.send(data);
        }
    });
})

module.exports = Router;
