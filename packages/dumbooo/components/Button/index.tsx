import React, { ReactNode } from 'react';
import './index.less';

export interface IButton {
    children: ReactNode;
}

export default function Button(props: IButton) {
    const { children } = props;
    return (
        <div>
            <button className="dumbo-button">
                {children}
            </button>
        </div>
    )
}
