const fetch = require('node-fetch');

var TVMazeService = {
    loadDataByName: loadDataByName
}

function loadDataByName(showName) {
    return fetch("http://api.tvmaze.com/search/shows?q="+ showName)
        .then((response) => response.json())
        .catch((err) => console.error(err))
}

module.exports = TVMazeService;
