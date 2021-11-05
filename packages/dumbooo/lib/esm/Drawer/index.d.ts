import { ReactNode } from 'react';
import { BaseType } from '../typing';
import './index.less';
export interface DrawerProps extends BaseType {
    visible: boolean;
    width?: number;
    mask?: boolean;
    onClose?: () => void;
    header?: ReactNode;
    footer?: ReactNode;
}
export default function Drawer(props: DrawerProps): JSX.Element;
