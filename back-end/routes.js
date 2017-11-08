var controller = require('./controller');
const CategoriesController = require('./controllers/categories_controller.js');
/*
  Probably needs a better name
*/
const SeriesMovieController = require('./controllers/series_movie_controller.js');
const ViewController = require('./controllers/view_controller.js');

function initRoutes(app) {
    app.get('/', controller.index);
    app.get('/categories', CategoriesController.categories);
    app.get('/playground', ViewController.playground);
    app.get('/series', SeriesMovieController.series);
    app.get('/series/:id', SeriesMovieController.seriesById);
    app.get('/series/:id/episodes', SeriesMovieController.episodes);
}

module.exports = initRoutes;
