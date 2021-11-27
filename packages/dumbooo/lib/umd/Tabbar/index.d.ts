import { FC, ReactNode } from 'react';
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
declare const TabBar: FC<TabBarProps> & {
    Item: FC<TabBarItemProps>;
};
export default TabBar;
