import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

export interface TagProps extends BaseType {
    name: string;
    color?: string;
}

export default function Tag(props: TagProps) {
    const { name, color = "#9786e1", onClick, } = props;
    return (
        <div>
            <div className="dumbo-tag" style={{ backgroundColor: color }}>
                <div>{name}</div>
            </div>
        </div>
    )
}
