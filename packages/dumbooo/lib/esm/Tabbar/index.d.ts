import React, { Component, ReactNode } from 'react';
import Icon from '../icon/index';
import './index.less';
interface TabBarItemProps {
    icon: typeof Icon | string | ReactNode;
    selectedIcon?: typeof Icon | string | ReactNode;
    selected?: boolean;
    title: string | ReactNode;
    dot?: boolean;
    onClick?: () => void;
}
interface TabBarProps {
    children: Array<any>;
    fixed?: boolean;
}
export default class TabBar extends Component<TabBarProps, any> {
    static Item: React.FC<TabBarItemProps>;
    render(): JSX.Element;
}
export {};
