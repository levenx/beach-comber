import React, { ReactNode } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import { BaseType } from '../typing';
import './index.less';

export interface IAlert extends BaseType {
    icon?: ReactNode;
    showIcon?: boolean;
    type: 'success' | 'warning' | 'info' | 'error';
    message: ReactNode;
    closeable?: boolean;
    onClose?: (event: MouseEvent) => void;
}

export default function Alert(props: IAlert) {
    const { icon, showIcon, type = 'info', message, closeable, onClose, style } = props;
    return (
        <div className={`dumbo-alert dumbo-alert--${type}`} style={style}>
            <div className="dumbo-alert--message">
                {
                    showIcon && (icon || <Icon name="picture" />)
                }
                <span>{message}</span>
            </div>
            {
                closeable && <Icon name="close-circle" />
            }
        </div>
    )
}
