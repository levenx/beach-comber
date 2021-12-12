function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { marked } from 'marked';

__$styleInject(".grouper-preview {\n  width: 400px;\n  height: 800px;\n  position: fixed;\n  right: 10px;\n  bottom: 10px;\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  transition: all 0.3s ease-in-out;\n}\n.grouper-preview--visible {\n  transform: translateX(0);\n}\n.grouper-preview__title {\n  padding: 10px;\n  font-weight: 600;\n  font-size: 18px;\n  border-bottom: 1px solid #f1f1f1;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: space-between;\n}\n.grouper-preview__title .title {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.grouper-preview__title .close {\n  cursor: pointer;\n}\n.grouper-preview__content {\n  padding: 10px;\n  overflow-y: scroll;\n}\n.grouper-preview__content img {\n  max-width: 100%;\n}\n");

function Preview(props) {
    var onClose = props.onClose, title = props.title, content = props.content;
    var _a = useState(false), visible = _a[0], setVisible = _a[1];
    useEffect(function () {
        setTimeout(function () {
            setVisible(true);
        }, 0);
    }, []);
    var article = useMemo(function () {
        return marked(content);
    }, [content]);
    return (React.createElement("div", { className: classnames("grouper-preview", { "grouper-preview--visible": visible }) },
        React.createElement("div", { className: "grouper-preview__title" },
            React.createElement("span", { className: "title" }, title),
            React.createElement("span", { className: "close", onClick: function () {
                    setVisible(false);
                    setTimeout(function () {
                        onClose();
                    }, 300);
                } }, "x")),
        React.createElement("div", { className: "grouper-preview__content", dangerouslySetInnerHTML: { __html: article } })));
}

var GrouperDoc = (function () {
    function GrouperDoc(config) {
        this.config = config;
    }
    GrouperDoc.prototype.destory = function () {
        ReactDOM.unmountComponentAtNode(this.root);
    };
    GrouperDoc.prototype.render = function (config) {
        var title = config.title, content = config.content, root = config.root;
        var div = root;
        if (!root) {
            div = document.createElement('div');
            document.body.appendChild(div);
        }
        this.root = div;
        var App = React.createElement(Preview, { onClose: this.destory.bind(this), title: title, content: content });
        ReactDOM.render(App, div);
    };
    return GrouperDoc;
}());

export { GrouperDoc as default };
//# sourceMappingURL=index.js.map
