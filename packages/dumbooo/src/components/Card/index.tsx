import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

export interface CardProps extends BaseType {

}

export default function Card(props: CardProps) {
    const { children, onClick, } = props;
    return (
        <div>
            <div
                className={classnames("dumbo-button")} onClick={onClick}>
                {children}
            </div>
        </div>
    )
}
