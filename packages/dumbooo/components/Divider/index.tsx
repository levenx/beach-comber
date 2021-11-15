import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

export interface DividerProps extends BaseType {
    dashed?: boolean;
    hairline?: boolean;
    position?: 'left' | 'center' | 'right';
    children?: ReactNode;
}

const Divider: FC<DividerProps> = ({ dashed = false, hairline = true, position = "center", children }) => {
    return <div className={classnames(`sail-divider sail-divider__content-${position}`,
        {
            "sail-divider__hairline": hairline,
            "sail-divider__dashed": dashed
        })} >
        {children}
    </div >
}

export default Divider;
