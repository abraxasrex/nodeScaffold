"use strict";
var express = require("express");
var Boxers_1 = require("../models/Boxers");
var router = express.Router();
router.get('/api/stuff', function (req, res, next) {
    Boxers_1.default.find().then(function (stuff) {
        res.send(stuff);
    });
});
module.exports = router;
