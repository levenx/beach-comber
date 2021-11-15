import { ReactNode } from 'react';
import { BaseType } from '../typing';
import './index.less';
export interface ICurtain extends BaseType {
    visible: boolean;
    onClose: () => void;
    content?: ReactNode;
    closePlacement?: 'top' | 'bottom';
}
export default function Curtain(props: ICurtain): JSX.Element;
