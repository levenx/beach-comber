import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

export interface ModalProps extends BaseType {
    visible: boolean;
    title: string;
    content: string;
    onClose?: () => void;
}

interface IAlert {
    title: string;
    content: string;
}

function Modal(props: ModalProps) {
    const { title, content, visible, onClose } = props;
    return (
        <div className={classnames("dumbo-modal", { "dumbo-modal--visible": visible })}>
            <div className="dumbo-modal__mask"></div>
            <div className="dumbo-modal__body">
                <div onClick={onClose}>关闭</div>
                <div className="dumbo-modal__body-title">{title}</div>
                <div className="dumbo-modal__body-content">{content}</div>
            </div>
        </div>
    )
}

Modal.alert = alert;

let rootId = 1;
function alert({ title, content }: IAlert) {
    const root = document.createElement("div");
    root.setAttribute('id', `dialog-${rootId}`);
    document.body.appendChild(root);

    const onClose = () => {
        document.body.removeChild(root);
    }

    ReactDOM.render(<Modal visible={true} title={title} content={content} onClose={onClose} />, root);
    return rootId;
}

export default Modal;