// welcome to levenx guard
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ClownArticle = factory(global.React, global.ReactDOM));
})(this, (function (React, ReactDOM) { 'use strict';

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

  __$styleInject(".title {\n  font-size: 24px;\n  background: #ccc;\n}\n");

  function Title() {
      return (React__default["default"].createElement("div", { className: "title" }, "title"));
  }

  __$styleInject("");

  var ClownArticle = (function () {
      function ClownArticle(options) {
      }
      ClownArticle.prototype.render = function () {
          ReactDOM__default["default"].render(React__default["default"].createElement("div", null,
              React__default["default"].createElement(Title, null)), document.getElementById('article'));
      };
      return ClownArticle;
  }());

  return ClownArticle;

}));
//# sourceMappingURL=index.js.map
