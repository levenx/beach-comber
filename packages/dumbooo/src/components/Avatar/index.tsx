import React, { useMemo } from 'react';
import { BaseType } from '../typing';
import './index.less';

export interface AvatarProps extends BaseType {
    src: string;
    alt?: string;
    size?: 'large' | 'middle' | 'small' | number;
    shape?: 'circle' | 'round';
}

export default function Avatar(props: AvatarProps) {
    const { src, alt, shape = "round", size, onClick, } = props;
    const style = useMemo(() => {
        let style = {};
        if (typeof size === 'number') {
            style = { ...style, height: size, width: size }
        }
        if (size === 'large') {
            style = { ...style, height: 64, width: 64 }
        }
        if (size === 'middle') {
            style = { ...style, height: 48, width: 48 }
        }
        if (size === 'small') {
            style = { ...style, height: 32, width: 32 }
        }
        return style;
    }, [size]);
    return (
        <div>
            <img className={`dumbo-avatar dumbo-avatar--${shape}`} src={src} alt={alt} style={style} />
        </div>
    )
}
