var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    name: String
});

var Movie = module.exports = mongoose.model('Movie', movieSchema);