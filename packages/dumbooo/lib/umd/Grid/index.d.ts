import React, { Component } from 'react';
import { BaseType } from '../typing';
import './index.less';
export interface GridItemProps extends BaseType {
}
interface GridProps extends BaseType {
    children?: Array<any>;
}
export default class Grid extends Component<GridProps, any> {
    static Item: React.FC<GridItemProps>;
    render(): JSX.Element;
}
export {};
