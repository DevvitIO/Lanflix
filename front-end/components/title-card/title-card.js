(function () {
    'use strict';

    var nodes = Array.prototype.slice.call(
        document.getElementsByClassName("lf-title-card")
    );

    if (nodes) {
        nodes.forEach(function (node) {
            var icon = document.createElement("i");
            icon.setAttribute("class", "lf-play-btn fa fa-play-circle-o");
            icon.setAttribute("aria-hidden", "true");
            node.prepend(icon);

            var backgroundImage = node.querySelector("img");
            backgroundImage.setAttribute("onerror", "if (this.src != 'components/title-card/default.png') this.src = 'components/title-card/default.png';")
        });
    }
}());