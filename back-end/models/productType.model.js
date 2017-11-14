var mongoose = require('mongoose');

var productTypeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String
});

var ProductType = module.exports = mongoose.model('ProductType', productTypeSchema);