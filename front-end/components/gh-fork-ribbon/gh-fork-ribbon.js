(function () {
    'use strict';

    function _appendRibbonToDOM(wrappers) {

        function _loadHTML(filepath) {
            return new Promise(function (resolve, reject) {

                function _loadedHandler() {
                    // Status code 0 is returned by the file system, can be removed later
                    if (req.status !== 200 && req.status !== 0) {
                        reject(new Error("Could not find file: " + filepath));
                    } else {
                        resolve(this.responseText);
                    }
                }
    
                function _errorHandler(resolve, reject) {
                    reject(new Error("Error loading file: ", filepath));
                }

                var req = new XMLHttpRequest();
                req.addEventListener("load", _loadedHandler, false);
                req.addEventListener("error", _errorHandler, false);
                req.open('GET', filepath);
                req.send();
            })

        }

        function _buildDOMNode(html) {
            var ele = document.createElement('lf-gh-fork-ribbon');
            ele.innerHTML = html;

            /*return div.children.length > 1
                ? div // Added a div
                : div.firstChild;*/
            return Promise.resolve(ele);
        }

        function _appendToDOM(domNode) {
            Array.prototype.forEach.call(wrappers, function (wrapper) {
                wrapper.appendChild(domNode);
            });
        }

        _loadHTML('components/gh-fork-ribbon/gh-fork-ribbon.html')
            .then(_buildDOMNode)
            .then(_appendToDOM);
    }

    function _initEventHandlers(nodes) {
        function _toggleHover(evt) {
            var isMouseEnter = (evt.type === 'mouseenter');
            var imageSrc = isMouseEnter
                ? 'https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67'
                : 'https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67';
    
            var canonicalSrc = isMouseEnter
                ? 'https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png'
                : 'https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png';
    
            if (evt.target) {
                var img = evt.target.querySelector('img');
                img.src = imageSrc;
                img.dataset.canonicalSrc = canonicalSrc;
            }
        }

        if (!nodes || nodes.length <= 0) return;
        Array.prototype.forEach.call(nodes, function (ribbon) {
            ribbon.addEventListener("mouseenter", _toggleHover);
            ribbon.addEventListener("mouseleave", _toggleHover);
        });
    }

    var wrappers = document.getElementsByClassName('lf-gh-fork-ribbon');
    if (wrappers) {
        _appendRibbonToDOM(wrappers);
        _initEventHandlers(wrappers);
    }

}());