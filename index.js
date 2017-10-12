var express = require('express');

var app = express();

app.use(express.static('front-end'));
app.get('/hello', function (req, res) {
    res.send('hello world');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname +'/front-end/index.html'); 
});

app.get('/playground', function (req, res) {
    res.sendFile(__dirname +'/front-end/component-playground/index.html'); 
});

app.listen(3000);
