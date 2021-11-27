import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

export interface IButton extends BaseType {
    size?: number | string;
    loading: boolean;
}

export default function Button(props: IButton) {
    const { size, loading, children } = props;
    return (
        <>
            {
                loading ? <div className="dumbo-loading" style={{ width: size, height: size }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                    :
                    children
            }
        </>
    )
}
