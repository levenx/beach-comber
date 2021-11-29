// welcome to levenx guard
function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import React from 'react';
import ReactDOM from 'react-dom';

__$styleInject(".title {\n  font-size: 24px;\n  background: #ccc;\n}\n");

function Title() {
    return (React.createElement("div", { className: "title" }, "title"));
}

__$styleInject("");

var ClownArticle = (function () {
    function ClownArticle(options) {
    }
    ClownArticle.prototype.render = function () {
        ReactDOM.render(React.createElement("div", null,
            React.createElement(Title, null)), document.getElementById('article'));
    };
    return ClownArticle;
}());

export { ClownArticle as default };
//# sourceMappingURL=index.js.map
