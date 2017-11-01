var mongoose = require('mongoose');

var episodeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
});

var seriesSchema = new mongoose.Schema({
    name: { 
        type: String, 
        unique: true 
    },
    episodes: [episodeSchema]
});

var Series = module.exports = mongoose.model('Series', seriesSchema);