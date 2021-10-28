// welcome to levenx guard
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('animate.css'), require('react'), require('classnames'), require('react-transition-group')) :
    typeof define === 'function' && define.amd ? define(['exports', 'animate.css', 'react', 'classnames', 'react-transition-group'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DumboUI = {}, null, global.React, global.classnames, global.reactTransitionGroup));
})(this, (function (exports, animate_css, React, classnames, reactTransitionGroup) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

    function Button(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Drawer(props) {
        const { visible, width = 400, className = '' } = props;
        return (React__default["default"].createElement(reactTransitionGroup.CSSTransition, { classNames: "drawer", in: visible, timeout: 200, appear: true },
            React__default["default"].createElement("div", { className: `${className} drawer`, style: { width } }, "Drawer")));
    }

    exports.Button = Button;
    exports.Drawer = Drawer;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dumbooo.js.map
