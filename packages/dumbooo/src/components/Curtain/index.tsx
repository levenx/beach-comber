import React, { ReactNode, useMemo } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import { BaseType } from '../typing';
import './index.less';

export interface ICurtain extends BaseType {
    visible: boolean;
    onClose: () => void;
    content?: ReactNode;
    closePlacement?: 'top' | 'bottom';
}

export default function Curtain(props: ICurtain) {
    const { visible, onClose, content, closePlacement, style = {}, className } = props;

    return (
        <div className={classnames(`dumbo-curtain`, className, { 'dumbo-curtain--visible': visible })} style={style} >
            <div className="dumbo-curtain--content">
                {content}
                <Icon
                    onClick={onClose}
                    name="close-circle" size={42}
                    color="#FFF"
                    className="dumbo-curtain__close" />
            </div>
            <div className="dumbo-curtain--mask"></div>
        </div>
    )
}
