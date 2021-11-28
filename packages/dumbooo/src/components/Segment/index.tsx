import React, { FC, Component, ReactNode } from 'react';
import Icon from '../icon/index';
import classnames from 'classnames';
import './index.less';

interface SegmentOption<T = unknown> {
    text: string;
    value: T;
}

interface SegmentProps<T> {
    options: Array<SegmentOption<T>>;
    value: T;
    onChange: (value: T) => void;
}

function Segment<T>(props: SegmentProps<T>) {
    const { options, value, onChange } = props;
    return (
        <div className="dumbo-segment">
            {
                options?.map(option => {
                    return <div
                        onClick={() => onChange(option.value)}
                        className={classnames(
                            "dumbo-segment-item",
                            { "dumbo-segment-item--active": value === option.value })}>
                        {option.text}
                    </div>
                })
            }
        </div>
    )
}


export default Segment;