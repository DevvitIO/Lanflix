var path = require('path');
var mongoose = require('mongoose');

var Series = require('./models').Series;

var controllers = {
    index: index,
    playground: playground,
    series: series
};

function index(req, res) {
    res.sendFile(__dirname + '/front-end/index.html'); 
}

function playground(req, res) {
    // this may be a security risk, but it allows for a separation of front- and back-end code
    res.sendFile(path.resolve(__dirname, '..', 'front-end', 'component-playground', 'index.html' ));  
}

function series(req, res) {
    Series.find(function(err, series) {
        if(err) {
            res.sendStatus(500);
        } else {
            res.send(series);
        }
    })
}

module.exports = controllers;