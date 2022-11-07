const express = require('express');
const router = express.Router();
const randomQuotes = require('random-quotes');
exports.index = function (req, res) {
    res.render('index', {
        quotes: randomQuotes.default()
    });
}
