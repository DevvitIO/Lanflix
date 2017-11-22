var mongoose = require('mongoose');

var productTypeSchema = mongoose.model('ProductType').schema;
var categorySchema = mongoose.model('Category').schema;

var movieSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true },
    type: productTypeSchema,
    category: [categorySchema],
    videoPath: String,
    language: String,
    premiere: Date,
    rating: { type: Number, min: 1, max: 10 },
    imdbRating: { type: Number, min: 1, max: 10 },
    image: String,
    description: String,
});

var Movie = module.exports = mongoose.model('Movie', movieSchema);