var mongoose = require('mongoose');

var seriesSchema = new mongoose.Schema({
    name: { 
        type: String, 
        unique: true 
    }
});

var Series = module.exports = mongoose.model('Series', seriesSchema);