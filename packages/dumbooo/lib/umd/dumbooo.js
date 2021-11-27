// welcome to levenx guard
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('classnames'), require('react-transition-group')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'classnames', 'react-transition-group'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DumboUI = {}, global.React, global.classnames, global.reactTransitionGroup));
})(this, (function (exports, React, classnames, reactTransitionGroup) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

    function Icon(props) {
        var name = props.name, _a = props.size, size = _a === void 0 ? 18 : _a, _b = props.color, color = _b === void 0 ? '#333' : _b, _c = props.className, className = _c === void 0 ? '' : _c, onClick = props.onClick;
        var targetClass = React.useMemo(function () {
            return "iconfont icon-dumbo-" + name + " " + className;
        }, [name]);
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("span", { className: targetClass, style: { fontSize: size, color: color }, onClick: onClick })));
    }

    function Alert(props) {
        var icon = props.icon, showIcon = props.showIcon, _a = props.type, type = _a === void 0 ? 'info' : _a, message = props.message, closeable = props.closeable; props.onClose; var style = props.style;
        return (React__default["default"].createElement("div", { className: "dumbo-alert dumbo-alert--" + type, style: style },
            React__default["default"].createElement("div", { className: "dumbo-alert--message" },
                showIcon && (icon || React__default["default"].createElement(Icon, { name: "picture" })),
                React__default["default"].createElement("span", null, message)),
            closeable && React__default["default"].createElement(Icon, { name: "close-circle" })));
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function Avatar(props) {
        var src = props.src, alt = props.alt, _a = props.shape, shape = _a === void 0 ? "round" : _a, size = props.size; props.onClick;
        var style = React.useMemo(function () {
            var style = {};
            if (typeof size === 'number') {
                style = __assign(__assign({}, style), { height: size, width: size });
            }
            if (size === 'large') {
                style = __assign(__assign({}, style), { height: 64, width: 64 });
            }
            if (size === 'middle') {
                style = __assign(__assign({}, style), { height: 48, width: 48 });
            }
            if (size === 'small') {
                style = __assign(__assign({}, style), { height: 32, width: 32 });
            }
            return style;
        }, [size]);
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("img", { className: "dumbo-avatar dumbo-avatar--" + shape, src: src, alt: alt, style: style })));
    }

    var Badge = function (_a) {
        var children = _a.children; _a.size; var value = _a.value, color = _a.color, dot = _a.dot, _b = _a.max, max = _b === void 0 ? 99 : _b;
        if (children) {
            return React__default["default"].createElement("div", { className: "sail-badge__wrapper" },
                children,
                React__default["default"].createElement("div", { className: classnames__default["default"]("sail-badge sail-badge__fixed", { "sail-badge__dot": dot }), style: { background: color } }, typeof (value) === 'number' ?
                    value > max ?
                        max + "+" : value
                    : value));
        }
        else {
            return React__default["default"].createElement("div", { className: classnames__default["default"]("sail-badge", { "sail-badge__dot": dot }), style: { background: color } }, typeof (value) === 'number' ?
                value > max ?
                    max + "+" : value
                : value);
        }
    };

    function Button$j(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$i(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Curtain(props) {
        var visible = props.visible, onClose = props.onClose, content = props.content; props.closePlacement; var _a = props.style, style = _a === void 0 ? {} : _a, className = props.className;
        return (React__default["default"].createElement("div", { className: classnames__default["default"]("dumbo-curtain", className, { 'dumbo-curtain--visible': visible }), style: style },
            React__default["default"].createElement("div", { className: "dumbo-curtain--content" },
                content,
                React__default["default"].createElement(Icon, { onClick: onClose, name: "close-circle", size: 42, color: "#FFF", className: "dumbo-curtain__close" })),
            React__default["default"].createElement("div", { className: "dumbo-curtain--mask" })));
    }

    function Button$h(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Drawer(props) {
        var visible = props.visible, _a = props.width, width = _a === void 0 ? 400 : _a, _b = props.className, className = _b === void 0 ? '' : _b;
        return (React__default["default"].createElement(reactTransitionGroup.CSSTransition, { classNames: "drawer", in: visible, timeout: 200, appear: true },
            React__default["default"].createElement("div", { className: className + " drawer", style: { width: width } }, "Drawer")));
    }

    function Button$g(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    var context = React.createContext({});
    var Provider = context.Provider; context.Consumer;

    var FormItem = function (_a) {
        var label = _a.label, name = _a.name; _a.value; _a.rules; _a.trigger; var children = _a.children, onChange = _a.onChange;
        var curValue = React.useContext(context)[name];
        return React__default["default"].createElement("div", { className: "sail-cell sail-item" },
            React__default["default"].createElement("div", { className: "sail-item-label" },
                React__default["default"].createElement("span", null, label)),
            React__default["default"].createElement("div", { className: "sail-item-value" },
                React__default["default"].createElement("div", { className: "sail-item-body" }, React__default["default"].cloneElement(children, { onChange: onChange, name: name, value: curValue })),
                React__default["default"].createElement("div", { className: "sail-item-error" })));
    };
    var Form = (function (_super) {
        __extends(Form, _super);
        function Form(props) {
            var _this = _super.call(this, props) || this;
            _this.onChange = function (name, value) {
                var _a;
                _this.setState({ values: Object.assign({}, _this.state.values, (_a = {}, _a[name] = value, _a)) });
            };
            _this.state = {
                values: {}
            };
            return _this;
        }
        Form.prototype.render = function () {
            var _this = this;
            var _a = this.props, onSubmit = _a.onSubmit, children = _a.children;
            var values = this.state.values;
            return (React__default["default"].createElement(Provider, { value: values },
                React__default["default"].createElement("form", { className: "", onSubmit: function (event) {
                        event.preventDefault();
                        onSubmit(values);
                    } }, Array.isArray(children) ? children.map(function (child, inx) {
                    return React__default["default"].cloneElement(child, { key: inx, onChange: _this.onChange });
                })
                    :
                        React__default["default"].cloneElement(children, { onChange: this.onChange }))));
        };
        Form.Item = FormItem;
        return Form;
    }(React.Component));

    var Input = function (_a) {
        var name = _a.name, value = _a.value, onChange = _a.onChange;
        return React__default["default"].createElement("input", { value: value, onChange: function (e) { onChange(name, e.target.value); } });
    };

    function Button$f(props) {
        var size = props.size, loading = props.loading, children = props.children;
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

    function MediaPreview(props) {
        var visible = props.visible, onClose = props.onClose, _a = props.medias, medias = _a === void 0 ? [] : _a;
        var _b = React.useState(false), copy = _b[0], setCopy = _b[1];
        var onDownload = function (url) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', url);
            xhr.responseType = 'blob';
            xhr.send();
            xhr.onload = function () {
                if (this.status === 200 || this.status === 304) {
                    var url_1 = URL.createObjectURL(this.response);
                    var a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url_1;
                    a.download = url_1.split('/').pop();
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url_1);
                }
            };
        };
        var onCopy = function () {
            var input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', medias === null || medias === void 0 ? void 0 : medias[0]);
            input.select();
            if (document.execCommand('copy')) {
                document.execCommand('copy');
                console.log('复制成功');
            }
            document.body.removeChild(input);
            setCopy(true);
            setTimeout(function () {
                setCopy(false);
            }, 3000);
        };
        var operates = [
            { icon: 'download-circle', onClick: function () { return onDownload(medias[0]); } },
            { icon: copy ? 'right-fill' : 'copy', onClick: function () { return onCopy(); } },
            { icon: 'decrease-circle', onClick: function () { } },
            { icon: 'plus-circle', onClick: function () { } },
            { icon: 'close-circle', onClick: onClose }
        ];
        return (React__default["default"].createElement("div", { className: classnames__default["default"]("dumbo-media--preview", { 'preview': visible }) },
            React__default["default"].createElement("div", { className: "media-preview--operate" }, operates.map(function (operate, inx) {
                return React__default["default"].createElement(Icon, { key: inx, name: operate.icon, color: "#fff", size: 24, onClick: operate.onClick, className: "media-preview--icon" });
            })),
            medias.map(function (media) {
                return React__default["default"].createElement("img", { key: media, src: media, alt: "" });
            })));
    }

    function Button$e(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$d(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$c(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$b(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$a(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$9(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Progress(props) {
        var _a = props.percent, percent = _a === void 0 ? 0 : _a;
        var width = React.useMemo(function () {
            return { width: percent + "%" };
        }, [percent]);
        return (React__default["default"].createElement("div", { className: "dumbo-progress" },
            React__default["default"].createElement("div", { className: "dumbo-progress--percent", style: width })));
    }

    function Button$8(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$7(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$6(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$5(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    var Item = function (_a) {
        var icon = _a.icon, title = _a.title, onClick = _a.onClick;
        return React__default["default"].createElement("div", { className: "sail-tabbar-item", onClick: onClick },
            React__default["default"].createElement("div", { className: "sail-tabbar-item-icon" }, icon),
            React__default["default"].createElement("div", { className: "sail-tabbar-item-text" }, title));
    };
    var TabBar = function (props) {
        var children = props.children, fixed = props.fixed;
        return (React__default["default"].createElement("div", { className: classnames__default["default"]("sail-tabbar", { "sail-tabbar-fixed": fixed }) }, children));
    };
    TabBar.Item = Item;

    function Button$4(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$3(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$2(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$1(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button(props) {
        var _a = props.type, type = _a === void 0 ? "default" : _a, block = props.block, shape = props.shape, disabled = props.disabled, children = props.children, onClick = props.onClick;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", "dumbo-button--" + type, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Upload(props) {
        var _a = props.files, files = _a === void 0 ? [] : _a, onUpload = props.onUpload, _b = props.mode, mode = _b === void 0 ? "default" : _b, onImageClick = props.onImageClick;
        var uploadRef = React.useRef(null);
        var _c = React.useState(false), loading = _c[0], setLoading = _c[1];
        var _d = React.useState(null), picture = _d[0], setPicture = _d[1];
        var onUploadClick = function () {
            uploadRef.current.click();
        };
        var onUploadChange = function (file) {
            setLoading(true);
            setPicture({ name: file.name });
            onUpload(file, function (progressEvent) {
                var percent = (progressEvent.loaded / progressEvent.total * 100 | 0);
                setPicture(__assign(__assign({}, picture), { percent: percent }));
            }).then(function (file) {
                setLoading(false);
            });
        };
        var onClick = function (file) {
            if (mode) {
                onImageClick(file);
            }
        };
        return (React__default["default"].createElement("div", { className: "dumbo-upload" },
            React__default["default"].createElement("div", { className: "dumbo-upload--item dumbo-upload--add", onClick: onUploadClick }, loading ?
                React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement(Progress, { percent: picture.percent }))
                :
                    React__default["default"].createElement(React__default["default"].Fragment, null,
                        React__default["default"].createElement(Icon, { name: "picture", size: 28, color: "#dcdee0" }))),
            files.map(function (picture) {
                return React__default["default"].createElement("div", { className: "dumbo-upload--item", onClick: function () { return onClick(picture); } },
                    React__default["default"].createElement("img", { src: picture }));
            }),
            React__default["default"].createElement("input", { ref: uploadRef, type: "file", style: { display: 'none' }, onChange: function (event) {
                    var _a;
                    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
                    if (file) {
                        onUploadChange(file);
                    }
                } })));
    }

    exports.Alert = Alert;
    exports.Avatar = Avatar;
    exports.Badge = Badge;
    exports.Button = Button$j;
    exports.Card = Button$i;
    exports.Curtain = Curtain;
    exports.DatePicker = Button$h;
    exports.Drawer = Drawer;
    exports.Empty = Button$g;
    exports.Form = Form;
    exports.Icon = Icon;
    exports.Input = Input;
    exports.Loading = Button$f;
    exports.MediaPreview = MediaPreview;
    exports.Message = Button$e;
    exports.Modal = Button$d;
    exports.Notification = Button$c;
    exports.Pagination = Button$b;
    exports.Popconfirm = Button$a;
    exports.Popver = Button$9;
    exports.Progress = Progress;
    exports.Radio = Button$8;
    exports.Skeleton = Button$7;
    exports.Steps = Button$6;
    exports.Switch = Button$5;
    exports.Tabbar = TabBar;
    exports.Table = Button$4;
    exports.Tag = Button$3;
    exports.TimePicker = Button$1;
    exports.Timeline = Button$2;
    exports.Tooltip = Button;
    exports.Upload = Upload;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dumbooo.js.map
