import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

export interface IButton extends BaseType {
    block?: boolean;
    size?: 'large' | 'middle' | 'small';
    type?: 'default' | 'primary' | 'danger' | 'dashed' | 'text' | 'link';
    shape?: 'default' | 'circle' | 'round';
    loading?: boolean;
    disabled?: boolean;
}



export default function Button(props: IButton) {
    const { type = "default", block, shape, disabled, children, onClick, } = props;
    return (
        <div>
            <button
                disabled={disabled}
                className={classnames("dumbo-button", `dumbo-button--${type}`,
                    {
                        'dumbo-button--block': block,
                        'dumbo-button--circle': shape === 'circle',
                        'dumbo-button--disabled': disabled
                    })} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}
