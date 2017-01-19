"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var index_1 = require("./routes/index");
var stuff = require("./api/boxers");
var app = express();
var dev = app.get('env') === 'development' ? true : false;
if (dev) {
    var dotenv = require('dotenv');
    dotenv.load();
}
var Boxers_1 = require("./models/Boxers");
mongoose.connect(process.env.MONGO_URI).then(function () {
    console.log('connection');
    Boxers_1.default.create({
        prop1: 'hi',
        prop2: 'also hiiiii'
    });
}).catch(function (err) {
    console.log(err);
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
app.use('/', index_1.default);
app.use('/', stuff);
app.get('/*', function (req, res, next) {
    if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
    }
    else {
        return res.render('index');
    }
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err['status'] || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
