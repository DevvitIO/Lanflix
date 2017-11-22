var mongoose = require('mongoose');

var episodeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    season: { type: Number, required: true },
    number: { type: Number, required: true },
    premiere: Date,
    videoPath: String,
    image: String,
    description: String,
    rating: { type: Number, min: 1, max: 10 },
    imdbRating: { type: Number, min: 1, max: 10 }
});

var Episode = module.exports = mongoose.model('Episode', episodeSchema);