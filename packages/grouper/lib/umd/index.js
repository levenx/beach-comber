(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom'), require('classnames'), require('marked')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'classnames', 'marked'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DumboUI = factory(global.React, global.ReactDOM, global.classnames, global.marked));
})(this, (function (React, ReactDOM, classnames, marked) { 'use strict';

  function __$styleInject(css) {
      if (!css) return;

      if (typeof window == 'undefined') return;
      var style = document.createElement('style');
      style.setAttribute('media', 'screen');

      style.innerHTML = css;
      document.head.appendChild(style);
      return css;
  }

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
  var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

  __$styleInject(".grouper-preview {\n  width: 400px;\n  height: 800px;\n  position: fixed;\n  right: 10px;\n  bottom: 10px;\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  transition: all 0.3s ease-in-out;\n}\n.grouper-preview--visible {\n  transform: translateX(0);\n}\n.grouper-preview__title {\n  padding: 10px;\n  font-weight: 600;\n  font-size: 18px;\n  border-bottom: 1px solid #f1f1f1;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: space-between;\n}\n.grouper-preview__title .title {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.grouper-preview__title .close {\n  cursor: pointer;\n}\n.grouper-preview__content {\n  padding: 10px;\n  overflow-y: scroll;\n}\n.grouper-preview__content img {\n  max-width: 100%;\n}\n");

  function Preview(props) {
      var onClose = props.onClose, title = props.title, content = props.content;
      var _a = React.useState(false), visible = _a[0], setVisible = _a[1];
      React.useEffect(function () {
          setTimeout(function () {
              setVisible(true);
          }, 0);
      }, []);
      var article = React.useMemo(function () {
          return marked.marked(content);
      }, [content]);
      return (React__default["default"].createElement("div", { className: classnames__default["default"]("grouper-preview", { "grouper-preview--visible": visible }) },
          React__default["default"].createElement("div", { className: "grouper-preview__title" },
              React__default["default"].createElement("span", { className: "title" }, title),
              React__default["default"].createElement("span", { className: "close", onClick: function () {
                      setVisible(false);
                      setTimeout(function () {
                          onClose();
                      }, 300);
                  } }, "x")),
          React__default["default"].createElement("div", { className: "grouper-preview__content", dangerouslySetInnerHTML: { __html: article } })));
  }

  var GrouperDoc = (function () {
      function GrouperDoc(config) {
          this.config = config;
      }
      GrouperDoc.prototype.destory = function () {
          ReactDOM__default["default"].unmountComponentAtNode(this.root);
      };
      GrouperDoc.prototype.render = function (config) {
          var title = config.title, content = config.content, root = config.root;
          var div = root;
          if (!root) {
              div = document.createElement('div');
              document.body.appendChild(div);
          }
          this.root = div;
          var App = React__default["default"].createElement(Preview, { onClose: this.destory.bind(this), title: title, content: content });
          ReactDOM__default["default"].render(App, div);
      };
      return GrouperDoc;
  }());

  return GrouperDoc;

}));
//# sourceMappingURL=index.js.map
