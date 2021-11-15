import React, { FC, Component } from 'react';
import { BaseType } from '../typing';
import './index.less';

export interface GridItemProps extends BaseType {
}

const Item: FC<GridItemProps> = ({ children }) => {
    return <div className="sail-grid-item" style={{ flexBasis: '33.3333%' }}>
        <div className="sail-grid-item__content sail-grid-item__content--center sail-grid-item__content--square sail-hairline">
            {children}
        </div>
    </div>
}


interface GridProps extends BaseType {
    children?: Array<any>;
}

export default class Grid extends Component<GridProps, any> {

    static Item = Item;

    render() {
        const { children } = this.props;
        return (
            <div className="sail-grid sail-hairline__top">
                {children}
            </div>
        )
    }
}
