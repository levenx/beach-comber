import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

export interface IPagination extends BaseType {
    current?: number;
    defaultCurrent?: number;
    defaultPageSize?: number;
    total: number
}

export default function Pagination(props: IPagination) {
    const { defaultCurrent = 1, defaultPageSize = 10, total } = props;
    const pageNumber = total / defaultPageSize;
    return (
        <div>
            <ul>
                
            </ul>
        </div>
    )
}
