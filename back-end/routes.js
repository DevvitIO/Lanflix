var controller = require('./controller');

function initRoutes(app) {
    app.get('/', controller.index);
    app.get('/playground', controller.playground);
}

module.exports = initRoutes;