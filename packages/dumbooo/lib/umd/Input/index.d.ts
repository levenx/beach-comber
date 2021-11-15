import { FC } from 'react';
import { BaseType } from '../typing';
import './index.less';
export interface InputProps extends BaseType {
    onChange?: (name: any, value: any) => void;
    name?: string;
    value?: any;
}
declare const Input: FC<InputProps>;
export default Input;
