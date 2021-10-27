// welcome to levenx guard
import React from 'react';
import classnames from 'classnames';

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
    return (React.createElement("div", null, "Drawer"));
}

export { Button, Drawer };
//# sourceMappingURL=dumbooo.js.map
