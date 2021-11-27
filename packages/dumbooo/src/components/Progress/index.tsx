import React, { useMemo } from 'react';
import classnames from 'classnames';
import { BaseType } from '../typing';
import './index.less';

export interface IProgress extends BaseType {
    percent: number;
}

export default function Progress(props: IProgress) {
    const { percent = 0 } = props;

    const width = useMemo(() => {
        return { width: `${percent}%` }
    }, [percent])

    return (
        <div className="dumbo-progress">
            <div className="dumbo-progress--percent" style={width}></div>
        </div>
    )
}
