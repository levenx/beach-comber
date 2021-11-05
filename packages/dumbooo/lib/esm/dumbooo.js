// welcome to levenx guard
import 'animate.css';
import React, { useMemo, useRef, useState } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

function Button$1(props) {
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
        return `iconfont icon-${name} ${className}`;
    }, [name]);
    return (React.createElement("div", null,
        React.createElement("span", { className: targetClass, style: { fontSize: size, color } })));
}

function Upload(props) {
    const { files, onUpload } = props;
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
    return (React.createElement("div", { className: "dumbo-upload" },
        files.map(picture => {
            return React.createElement("div", { className: "dumbo-upload--item" },
                React.createElement("img", { src: picture }));
        }),
        React.createElement("div", { className: "dumbo-upload--item dumbo-upload--add", onClick: onUploadClick }, loading ?
            React.createElement(React.Fragment, null,
                React.createElement(Progress, { percent: picture.percent }))
            :
                React.createElement(React.Fragment, null,
                    React.createElement(Icon, { name: "zengjia" }),
                    React.createElement("div", null, "\u4E0A\u4F20"))),
        React.createElement("input", { ref: uploadRef, type: "file", style: { display: 'none' }, onChange: (event) => {
                const file = event.target.files[0];
                onUploadChange(file);
            } })));
}

function Button(props) {
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

export { Button$1 as Button, Drawer, Icon, Button as Loading, Upload };
//# sourceMappingURL=dumbooo.js.map
