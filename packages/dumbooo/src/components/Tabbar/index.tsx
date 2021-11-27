import React, { FC, Component, ReactNode } from 'react';
import Icon from '../icon/index';
import classnames from 'classnames';
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

const Item: FC<TabBarItemProps> = ({ icon, title, onClick }) => {
    return <div className="sail-tabbar-item" onClick={onClick}>
        <div className="sail-tabbar-item-icon">
            {icon}
        </div>
        <div className="sail-tabbar-item-text">
            {title}
        </div>
    </div>
}

const TabBar: FC<TabBarProps> & { Item: FC<TabBarItemProps> } = (props) => {
    const { children, fixed } = props;
    return (
        <div className={classnames("sail-tabbar", { "sail-tabbar-fixed": fixed })}>
            {children}
        </div>
    )
}

TabBar.Item = Item;

export default TabBar;