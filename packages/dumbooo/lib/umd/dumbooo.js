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
        const { name, size = 18, color = '#333', className = '', onClick, } = props;
        const targetClass = React.useMemo(() => {
            return `iconfont icon-dumbo-${name} ${className}`;
        }, [name]);
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("span", { className: targetClass, style: { fontSize: size, color }, onClick: onClick })));
    }

    function Alert(props) {
        const { icon, showIcon, type = 'info', message, closeable, onClose, style } = props;
        return (React__default["default"].createElement("div", { className: `dumbo-alert dumbo-alert--${type}`, style: style },
            React__default["default"].createElement("div", { className: "dumbo-alert--message" },
                showIcon && (icon || React__default["default"].createElement(Icon, { name: "picture" })),
                React__default["default"].createElement("span", null, message)),
            closeable && React__default["default"].createElement(Icon, { name: "close-circle" })));
    }

    function Avatar(props) {
        const { src, alt, shape = "round", size, onClick, } = props;
        const style = React.useMemo(() => {
            let style = {};
            if (typeof size === 'number') {
                style = { ...style, height: size, width: size };
            }
            if (size === 'large') {
                style = { ...style, height: 64, width: 64 };
            }
            if (size === 'middle') {
                style = { ...style, height: 48, width: 48 };
            }
            if (size === 'small') {
                style = { ...style, height: 32, width: 32 };
            }
            return style;
        }, [size]);
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("img", { className: `dumbo-avatar dumbo-avatar--${shape}`, src: src, alt: alt, style: style })));
    }

    const Badge = ({ children, size, value, color, dot, max = 99 }) => {
        if (children) {
            return React__default["default"].createElement("div", { className: "sail-badge__wrapper" },
                children,
                React__default["default"].createElement("div", { className: classnames__default["default"]("sail-badge sail-badge__fixed", { "sail-badge__dot": dot }), style: { background: color } }, typeof (value) === 'number' ?
                    value > max ?
                        `${max}+` : value
                    : value));
        }
        else {
            return React__default["default"].createElement("div", { className: classnames__default["default"]("sail-badge", { "sail-badge__dot": dot }), style: { background: color } }, typeof (value) === 'number' ?
                value > max ?
                    `${max}+` : value
                : value);
        }
    };

    function Button$j(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$i(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Curtain(props) {
        const { visible, onClose, content, closePlacement, style = {}, className } = props;
        return (React__default["default"].createElement("div", { className: classnames__default["default"](`dumbo-curtain`, className, { 'dumbo-curtain--visible': visible }), style: style },
            React__default["default"].createElement("div", { className: "dumbo-curtain--content" },
                content,
                React__default["default"].createElement(Icon, { onClick: onClose, name: "close-circle", size: 42, color: "#FFF", className: "dumbo-curtain__close" })),
            React__default["default"].createElement("div", { className: "dumbo-curtain--mask" })));
    }

    function Button$h(props) {
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

    function Button$g(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    const Input = ({ name, value, onChange }) => {
        return React__default["default"].createElement("input", { value: value, onChange: e => { onChange(name, e.target.value); } });
    };

    function Button$f(props) {
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

    function MediaPreview(props) {
        const { visible, onClose, medias = [] } = props;
        const [copy, setCopy] = React.useState(false);
        const onDownload = (url) => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', url);
            xhr.responseType = 'blob';
            xhr.send();
            xhr.onload = function () {
                if (this.status === 200 || this.status === 304) {
                    const url = URL.createObjectURL(this.response);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = url.split('/').pop();
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }
            };
        };
        const onCopy = () => {
            const input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', medias?.[0]);
            input.select();
            if (document.execCommand('copy')) {
                document.execCommand('copy');
                console.log('复制成功');
            }
            document.body.removeChild(input);
            setCopy(true);
            setTimeout(() => {
                setCopy(false);
            }, 3000);
        };
        const operates = [
            { icon: 'download-circle', onClick: () => onDownload(medias[0]) },
            { icon: copy ? 'right-fill' : 'copy', onClick: () => onCopy() },
            { icon: 'decrease-circle', onClick: () => { } },
            { icon: 'plus-circle', onClick: () => { } },
            { icon: 'close-circle', onClick: onClose }
        ];
        return (React__default["default"].createElement("div", { className: classnames__default["default"]("dumbo-media--preview", { 'preview': visible }) },
            React__default["default"].createElement("div", { className: "media-preview--operate" }, operates.map((operate, inx) => {
                return React__default["default"].createElement(Icon, { key: inx, name: operate.icon, color: "#fff", size: 24, onClick: operate.onClick, className: "media-preview--icon" });
            })),
            medias.map(media => {
                return React__default["default"].createElement("img", { key: media, src: media, alt: "" });
            })));
    }

    function Button$e(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$d(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$c(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$b(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$a(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$9(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Progress(props) {
        const { percent = 0 } = props;
        const width = React.useMemo(() => {
            return { width: `${percent}%` };
        }, [percent]);
        return (React__default["default"].createElement("div", { className: "dumbo-progress" },
            React__default["default"].createElement("div", { className: "dumbo-progress--percent", style: width })));
    }

    function Button$8(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$7(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$6(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$5(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    const Item = ({ icon, title, onClick }) => {
        return React__default["default"].createElement("div", { className: "sail-tabbar-item", onClick: onClick },
            React__default["default"].createElement("div", { className: "sail-tabbar-item-icon" }, icon),
            React__default["default"].createElement("div", { className: "sail-tabbar-item-text" }, title));
    };
    class TabBar extends React.Component {
        static Item = Item;
        render() {
            const { children, fixed } = this.props;
            return (React__default["default"].createElement("div", { className: classnames__default["default"]("sail-tabbar", { "sail-tabbar-fixed": fixed }) }, children));
        }
    }

    function Button$4(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$3(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$2(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button$1(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Button(props) {
        const { type = "default", block, shape, disabled, children, onClick, } = props;
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("button", { disabled: disabled, className: classnames__default["default"]("dumbo-button", `dumbo-button--${type}`, {
                    'dumbo-button--block': block,
                    'dumbo-button--circle': shape === 'circle',
                    'dumbo-button--disabled': disabled
                }), onClick: onClick }, children)));
    }

    function Upload(props) {
        const { files = [], onUpload, mode = "default", onImageClick } = props;
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
        const onClick = (file) => {
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
            files.map(picture => {
                return React__default["default"].createElement("div", { className: "dumbo-upload--item", onClick: () => onClick(picture) },
                    React__default["default"].createElement("img", { src: picture }));
            }),
            React__default["default"].createElement("input", { ref: uploadRef, type: "file", style: { display: 'none' }, onChange: (event) => {
                    const file = event.target.files?.[0];
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
