import React, { useMemo } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import '../style/font.css';
import './index.less';

export interface IconProps extends BaseType {
    name: string;
    size?: number;
    color?: string;
}

export default function Icon(props: IconProps) {
    const { name, size = 18, color = '#333', className = '', onClick, } = props;

    const targetClass = useMemo(() => {
        return `iconfont icon-${name} ${className}`;
    }, [name])

    return (
        <div>
            <span className={targetClass} style={{ fontSize: size, color }} />
        </div>
    )
}
