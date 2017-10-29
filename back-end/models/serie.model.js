var mongoose = require('mongoose');

var serieSchema = new mongoose.Schema({
    name: { 
        type: String, 
        unique: true 
    }
});

var Serie = module.exports = mongoose.model('Serie', serieSchema);