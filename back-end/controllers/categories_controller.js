const Categories = require('../models').Categories;

module.exports = {
  categories(req, res) {
      Categories.find(function(err, categories) {
          if(err) {
              res.sendStatus(500);
          } else {
              res.send(categories);
          }
      })
  }
}
