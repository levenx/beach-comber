import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

export interface AvatarProps extends BaseType {
    src: string;
    alt?: string;
    size?: 'large' | 'middle' | 'small' | number;
    shape?: 'circle' | 'round';
}

export default function Avatar(props: AvatarProps) {
    const { src, alt, shape, size, onClick, } = props;
    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    )
}
