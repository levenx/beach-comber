import { FC, ReactNode } from 'react';
import { BaseType } from '../typing';
import './index.less';
export interface DividerProps extends BaseType {
    dashed?: boolean;
    hairline?: boolean;
    position?: 'left' | 'center' | 'right';
    children?: ReactNode;
}
declare const Divider: FC<DividerProps>;
export default Divider;
