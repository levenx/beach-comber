import React, { FC, Component } from 'react';
import { BaseType } from '../typing';
import './index.less';

export interface GridItemProps extends BaseType {
}


interface GridProps extends BaseType {
    children?: Array<any>;
}


const Item: FC<GridItemProps> = ({ children }) => {
    return <div className="sail-grid-item" style={{ flexBasis: '33.3333%' }}>
        <div className="sail-grid-item__content sail-grid-item__content--center sail-grid-item__content--square sail-hairline">
            {children}
        </div>
    </div>
}

const Grid: FC<GridProps> & { Item: FC<GridItemProps> } = (props) => {
    const { children } = props;
    return (
        <div className="sail-grid sail-hairline__top">
            {children}
        </div>
    )
}

Grid.Item = Item;

export default Grid;