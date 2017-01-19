"use strict";
var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    prop1: String,
    prop2: String
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Stuff', schema);
