import { FC, ReactNode } from 'react';
import { BaseType } from '../typing';
import './index.less';
export interface BadgeProps extends BaseType {
    size?: 'large' | 'small';
    value?: string | number | ReactNode;
    color?: string;
    dot?: boolean;
    max?: number;
}
declare const Badge: FC<BadgeProps>;
export default Badge;
