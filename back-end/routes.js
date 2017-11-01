var controller = require('./controller');

function initRoutes(app) {
    app.get('/', controller.index);
    app.get('/playground', controller.playground);
    app.get('/series', controller.series);
    app.get('/series/:id', controller.seriesById);
    app.get('/series/:id/episodes', controller.episodes);
}

module.exports = initRoutes;