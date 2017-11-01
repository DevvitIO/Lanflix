var express = require('express');
var reload = require('reload');
var MongoService = require('./services/mongo.service');


var LanflixServer = {
    start: start
}

function _initExpressApp(port) {
    var app = express();
    app.use(express.static(__dirname+ '/../front-end'));

    var routes = require('./routes')(app);
    
    app.listen(port);

    reload(app);

    return app;
}

function _initMongoDB() {
    MongoService.init();
}

function start(port) {
    console.log("Starting server...");
    _initMongoDB();
    var app = _initExpressApp(port);
    console.log("Server is running on port ", port);
}

module.exports = LanflixServer;