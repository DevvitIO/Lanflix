const mongoose = require('mongoose');
const Series = require('../models').Series;

module.exports = {
  series(req, res) {
      Series.find(function(err, series) {
          if(err) {
              res.sendStatus(500);
          } else {
              res.send(series);
          }
      })
  },

  seriesById(req, res) {
      var seriesId = req.params.id;
      if(!mongoose.Types.ObjectId.isValid(seriesId)) {
          return res.status(400).send("The provided series id is invalid!");
      }
      Series.findById(seriesId, function(err, series) {
          if(err) {
              res.sendStatus(500);
          } else {
              res.send(series);
          }
      })
  },

  episodes(req, res) {
      var seriesId = req.params.id;
      if(!mongoose.Types.ObjectId.isValid(seriesId)) {
          return res.status(400).send("The provided series id is invalid!");
      }
      Series.findById(seriesId, function (err, series) {
          if(err) {
              res.sendStatus(500);
          } else {
              res.send(series.episodes);
          }
      })
  }
}
