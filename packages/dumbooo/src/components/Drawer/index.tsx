import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import { BaseType } from '../typing';
import './index.less';

export interface DrawerProps extends BaseType {
    visible: boolean;
    width?: number;
    mask?: boolean;
    onClose?: () => void;
    header?: ReactNode;
    footer?: ReactNode;
}

export default function Drawer(props: DrawerProps) {
    const { visible, width = 400, className = '' } = props;
    return (
        <CSSTransition classNames="drawer" in={visible} timeout={200} appear>
            <div className={`${className} drawer`} style={{ width }}>
                Drawer
            </div>
        </CSSTransition>
    )
}
