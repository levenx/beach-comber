import { FC, ReactNode } from 'react';
import { BaseType } from '../typing';
import './index.less';
export interface NavBarProps extends BaseType {
    title: string | ReactNode;
    fixed?: boolean;
    border?: boolean;
    zIndex?: number;
    left: string | ReactNode;
    right: string | ReactNode;
    icon?: ReactNode;
}
declare const NavBar: FC<NavBarProps>;
export default NavBar;
