var mongoose = require('mongoose');

var productTypeSchema = mongoose.model('ProductType').schema;
var categorySchema = mongoose.model('Category').schema;
var episodeSchema = mongoose.model('Episode').schema;

var seriesSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    type: productTypeSchema,
    categories: [categorySchema],
    rootPath: String,
    language: String,
    premiere: Date,
    rating: { type: Number, min: 1, max: 10 },
    imdbRating: { type: Number, min: 1, max: 10 },
    image: String,
    description: String,
    episodes: [episodeSchema]
});

var Series = module.exports = mongoose.model('Series', seriesSchema);