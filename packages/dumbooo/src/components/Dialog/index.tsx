import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BaseType } from '../typing';
import './index.less';

export interface IDialog extends BaseType {
    title: string;
    content: string;
    onClose?: () => void;
}

interface IAlert {
    title: string;
    content: string;
}

function Dialog(props: IDialog) {
    const { title, content, onClose } = props;
    return (
        <>
            <div className="sail-overlay"></div>
            <div className="sail-dialog">
                <div onClick={onClose}>关闭</div>
                <div className="sail-dialog-title">{title}</div>
                <div className="sail-dialog-content">{content}</div>
            </div>
        </>
    )
}

Dialog.alert = alert;

let rootId = 1;
function alert({ title, content }: IAlert) {
    const root = document.createElement("div");
    root.setAttribute('id', `dialog-${rootId}`);
    document.body.appendChild(root);

    const onClose = () => {
        document.body.removeChild(root);
    }


    ReactDOM.render(<Dialog title={title} content={content} onClose={onClose} />, root);
    return rootId;
}

export default Dialog;