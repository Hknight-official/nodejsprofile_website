const express = require('express');
const router = express.Router();

exports.index = function (req, res) {
    res.render('index', {});
}
