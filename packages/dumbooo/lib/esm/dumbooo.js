// welcome to levenx guard
import React, { useMemo, useState, Component, useRef } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

function Icon(props) {
    const { name, size = 18, color = '#333', className = '', onClick, } = props;
    const targetClass = useMemo(() => {
        return `iconfont icon-dumbo-${name} ${className}`;
    }, [name]);
    return (React.createElement("div", null,
        React.createElement("span", { className: targetClass, style: { fontSize: size, color }, onClick: onClick })));
}

function Alert(props) {
    const { icon, showIcon, type = 'info', message, closeable, onClose, style } = props;
    return (React.createElement("div", { className: `dumbo-alert dumbo-alert--${type}`, style: style },
        React.createElement("div", { className: "dumbo-alert--message" },
            showIcon && (icon || React.createElement(Icon, { name: "picture" })),
            React.createElement("span", null, message)),
        closeable && React.createElement(Icon, { name: "close-circle" })));
}

function Avatar(props) {
    const { src, alt, shape = "round", size, onClick, } = props;
    const style = useMemo(() => {
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
    return (React.createElement("div", null,
        React.createElement("img", { className: `dumbo-avatar dumbo-avatar--${shape}`, src: src, alt: alt, style: style })));
}

const Badge = ({ children, size, value, color, dot, max = 99 }) => {
    if (children) {
        return React.createElement("div", { className: "sail-badge__wrapper" },
            children,
            React.createElement("div", { className: classnames("sail-badge sail-badge__fixed", { "sail-badge__dot": dot }), style: { background: color } }, typeof (value) === 'number' ?
                value > max ?
                    `${max}+` : value
                : value));
    }
    else {
        return React.createElement("div", { className: classnames("sail-badge", { "sail-badge__dot": dot }), style: { background: color } }, typeof (value) === 'number' ?
            value > max ?
                `${max}+` : value
            : value);
    }
};

function Button$j(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$i(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Curtain(props) {
    const { visible, onClose, content, closePlacement, style = {}, className } = props;
    return (React.createElement("div", { className: classnames(`dumbo-curtain`, className, { 'dumbo-curtain--visible': visible }), style: style },
        React.createElement("div", { className: "dumbo-curtain--content" },
            content,
            React.createElement(Icon, { onClick: onClose, name: "close-circle", size: 42, color: "#FFF", className: "dumbo-curtain__close" })),
        React.createElement("div", { className: "dumbo-curtain--mask" })));
}

function Button$h(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Drawer(props) {
    const { visible, width = 400, className = '' } = props;
    return (React.createElement(CSSTransition, { classNames: "drawer", in: visible, timeout: 200, appear: true },
        React.createElement("div", { className: `${className} drawer`, style: { width } }, "Drawer")));
}

function Button$g(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

const Input = ({ name, value, onChange }) => {
    return React.createElement("input", { value: value, onChange: e => { onChange(name, e.target.value); } });
};

function Button$f(props) {
    const { size, loading, children } = props;
    return (React.createElement(React.Fragment, null, loading ? React.createElement("div", { className: "dumbo-loading", style: { width: size, height: size } },
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null))
        :
            children));
}

function MediaPreview(props) {
    const { visible, onClose, medias = [] } = props;
    const [copy, setCopy] = useState(false);
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
    return (React.createElement("div", { className: classnames("dumbo-media--preview", { 'preview': visible }) },
        React.createElement("div", { className: "media-preview--operate" }, operates.map((operate, inx) => {
            return React.createElement(Icon, { key: inx, name: operate.icon, color: "#fff", size: 24, onClick: operate.onClick, className: "media-preview--icon" });
        })),
        medias.map(media => {
            return React.createElement("img", { key: media, src: media, alt: "" });
        })));
}

function Button$e(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$d(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$c(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$b(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$a(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$9(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Progress(props) {
    const { percent = 0 } = props;
    const width = useMemo(() => {
        return { width: `${percent}%` };
    }, [percent]);
    return (React.createElement("div", { className: "dumbo-progress" },
        React.createElement("div", { className: "dumbo-progress--percent", style: width })));
}

function Button$8(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$7(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$6(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$5(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

const Item = ({ icon, title, onClick }) => {
    return React.createElement("div", { className: "sail-tabbar-item", onClick: onClick },
        React.createElement("div", { className: "sail-tabbar-item-icon" }, icon),
        React.createElement("div", { className: "sail-tabbar-item-text" }, title));
};
class TabBar extends Component {
    static Item = Item;
    render() {
        const { children, fixed } = this.props;
        return (React.createElement("div", { className: classnames("sail-tabbar", { "sail-tabbar-fixed": fixed }) }, children));
    }
}

function Button$4(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$3(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$2(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$1(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Upload(props) {
    const { files = [], onUpload, mode = "default", onImageClick } = props;
    const uploadRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [picture, setPicture] = useState(null);
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
    return (React.createElement("div", { className: "dumbo-upload" },
        React.createElement("div", { className: "dumbo-upload--item dumbo-upload--add", onClick: onUploadClick }, loading ?
            React.createElement(React.Fragment, null,
                React.createElement(Progress, { percent: picture.percent }))
            :
                React.createElement(React.Fragment, null,
                    React.createElement(Icon, { name: "picture", size: 28, color: "#dcdee0" }))),
        files.map(picture => {
            return React.createElement("div", { className: "dumbo-upload--item", onClick: () => onClick(picture) },
                React.createElement("img", { src: picture }));
        }),
        React.createElement("input", { ref: uploadRef, type: "file", style: { display: 'none' }, onChange: (event) => {
                const file = event.target.files?.[0];
                if (file) {
                    onUploadChange(file);
                }
            } })));
}

export { Alert, Avatar, Badge, Button$j as Button, Button$i as Card, Curtain, Button$h as DatePicker, Drawer, Button$g as Empty, Icon, Input, Button$f as Loading, MediaPreview, Button$e as Message, Button$d as Modal, Button$c as Notification, Button$b as Pagination, Button$a as Popconfirm, Button$9 as Popver, Progress, Button$8 as Radio, Button$7 as Skeleton, Button$6 as Steps, Button$5 as Switch, TabBar as Tabbar, Button$4 as Table, Button$3 as Tag, Button$1 as TimePicker, Button$2 as Timeline, Button as Tooltip, Upload };
//# sourceMappingURL=dumbooo.js.map
