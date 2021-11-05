// welcome to levenx guard
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('animate.css'), require('react'), require('classnames'), require('react-transition-group')) :
    typeof define === 'function' && define.amd ? define(['exports', 'animate.css', 'react', 'classnames', 'react-transition-group'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DumboUI = {}, null, global.React, global.classnames, global.reactTransitionGroup));
})(this, (function (exports, animate_css, React, classnames, reactTransitionGroup) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

    function Button$1(props) {
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

    function Progress(props) {
        const { percent = 0 } = props;
        const width = React.useMemo(() => {
            return { width: `${percent}%` };
        }, [percent]);
        return (React__default["default"].createElement("div", { className: "dumbo-progress" },
            React__default["default"].createElement("div", { className: "dumbo-progress--percent", style: width })));
    }

    function Icon(props) {
        const { name, size = 18, color = '#333', className = '', onClick, } = props;
        const targetClass = React.useMemo(() => {
            return `iconfont icon-${name} ${className}`;
        }, [name]);
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("span", { className: targetClass, style: { fontSize: size, color } })));
    }

    function Upload(props) {
        const { files, onUpload, mode = "default", onItemClick } = props;
        const uploadRef = React.useRef(null);
        const [loading, setLoading] = React.useState(false);
        const [picture, setPicture] = React.useState(null);
        const onUploadClick = () => {
            uploadRef.current.click();
        };
        const onUploadChange = (file) => {
            setLoading(true);
            setPicture({ name: file.name });
            onUpload(file, (progressEvent) => {
                let percent = (progressEvent.loaded / progressEvent.total * 100 | 0);
                setPicture({ ...picture, percent });
            }).then(file => {
                setLoading(false);
            });
        };
        const onImageClick = (file) => {
            if (mode) {
                onItemClick(file);
            }
        };
        return (React__default["default"].createElement("div", { className: "dumbo-upload" },
            React__default["default"].createElement("div", { className: "dumbo-upload--item dumbo-upload--add", onClick: onUploadClick }, loading ?
                React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement(Progress, { percent: picture.percent }))
                :
                    React__default["default"].createElement(React__default["default"].Fragment, null,
                        React__default["default"].createElement(Icon, { name: "zengjia" }),
                        React__default["default"].createElement("div", null, "\u4E0A\u4F20"))),
            files.map(picture => {
                return React__default["default"].createElement("div", { className: "dumbo-upload--item", onClick: () => onImageClick(picture) },
                    React__default["default"].createElement("img", { src: picture }));
            }),
            React__default["default"].createElement("input", { ref: uploadRef, type: "file", style: { display: 'none' }, onChange: (event) => {
                    const file = event.target.files[0];
                    onUploadChange(file);
                } })));
    }

    function Button(props) {
        const { size, loading, children } = props;
        return (React__default["default"].createElement(React__default["default"].Fragment, null, loading ? React__default["default"].createElement("div", { className: "dumbo-loading", style: { width: size, height: size } },
            React__default["default"].createElement("span", null),
            React__default["default"].createElement("span", null),
            React__default["default"].createElement("span", null),
            React__default["default"].createElement("span", null),
            React__default["default"].createElement("span", null),
            React__default["default"].createElement("span", null),
            React__default["default"].createElement("span", null),
            React__default["default"].createElement("span", null))
            :
                children));
    }

    exports.Button = Button$1;
    exports.Drawer = Drawer;
    exports.Icon = Icon;
    exports.Loading = Button;
    exports.Upload = Upload;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dumbooo.js.map
