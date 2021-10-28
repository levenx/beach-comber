// welcome to levenx guard
import 'animate.css';
import React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

function Button(props) {
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

export { Button, Drawer };
//# sourceMappingURL=dumbooo.js.map
