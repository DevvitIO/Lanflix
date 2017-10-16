var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var mongoConfig = require('../config/mongo');
var dbURI = `mongodb://localhost/${mongoConfig.dbName}`;

var MongoService = {
    init: init
};

function _connectedHandler() { console.log('Mongoose connection open to ' + dbURI); }
function _errorHandler(err) { console.log('Mongoose connection error: ' + err); }
function _disconnectHandler() { console.log('Mongoose connection disconnected'); }
function _disconnect() {
    mongoose.connection.close(function () {
        console.log('Mongoose connection disconnected through app termination');
        process.exit(0);
    });
}

function _initConnection() {
    // Create the database connection
    mongoose.connect(dbURI, { useMongoClient: true });

    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on('connected', _connectedHandler);

    // If the connection throws an error
    mongoose.connection.on('error', _errorHandler);

    // When the connection is disconnected
    mongoose.connection.on('disconnected', _disconnectHandler);

    // If the Node process ends, close the Mongoose connection 
    process.on('SIGINT', _disconnect);
}

function _initModels() {
    require('../models');
}

function init() {
    _initConnection();
    _initModels();
}

module.exports = MongoService;

