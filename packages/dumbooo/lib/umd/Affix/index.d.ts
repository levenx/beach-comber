import { FC } from 'react';
import { BaseType } from '../typing';
import './index.less';
export interface AffixProps extends BaseType {
    onChange?: (name: any, value: any) => void;
    name?: string;
    value?: any;
}
declare const Affix: FC<AffixProps>;
export default Affix;
