// welcome to levenx guard
import 'animate.css';
import React, { useMemo, useRef, useState } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

function Button$k(props) {
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

function Progress(props) {
    const { percent = 0 } = props;
    const width = useMemo(() => {
        return { width: `${percent}%` };
    }, [percent]);
    return (React.createElement("div", { className: "dumbo-progress" },
        React.createElement("div", { className: "dumbo-progress--percent", style: width })));
}

function Icon(props) {
    const { name, size = 18, color = '#333', className = '', onClick, } = props;
    const targetClass = useMemo(() => {
        return `iconfont icon-dumbo-${name} ${className}`;
    }, [name]);
    return (React.createElement("div", null,
        React.createElement("span", { className: targetClass, style: { fontSize: size, color }, onClick: onClick })));
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
                    React.createElement(Icon, { name: "plus", size: 32, color: "#876d6d" }))),
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

function MediaPreview(props) {
    const { visible, onClose, medias = [] } = props;
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
    const operates = [
        { icon: 'download-circle', onClick: () => onDownload(medias[0]) },
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

function Button$j(props) {
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

function Button$i(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
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

function Button$g(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
}

function Button$f(props) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (React.createElement("div", null,
        React.createElement("button", { disabled: disabled, className: classnames("dumbo-button", `dumbo-button--${type}`, {
                'dumbo-button--block': block,
                'dumbo-button--circle': shape === 'circle',
                'dumbo-button--disabled': disabled
            }), onClick: onClick }, children)));
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

export { Button$h as Alert, Button$g as Badge, Button$k as Button, Button$f as Card, Button$e as DatePicker, Drawer, Button$2 as Empty, Button$c as Form, Icon, Button$b as Input, Button$j as Loading, MediaPreview, Button$4 as Message, Button$3 as Modal, Button$5 as Notification, Button$7 as Popver, Button$a as Radio, Button$i as Skeleton, Button$1 as Steps, Button$9 as Switch, Button as Tag, Button$d as TimePicker, Button$8 as Timeline, Button$6 as Tooltip, Upload };
//# sourceMappingURL=dumbooo.js.map
