import { ReactNode } from 'react';
import { BaseType } from '../typing';
import './index.less';
export interface IAlert extends BaseType {
    icon?: ReactNode;
    showIcon?: boolean;
    type: 'success' | 'warning' | 'info' | 'error';
    message: ReactNode;
    closeable?: boolean;
    onClose?: (event: MouseEvent) => void;
}
export default function Alert(props: IAlert): JSX.Element;
