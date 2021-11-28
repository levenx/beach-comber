import React, { FC } from 'react';
import { BaseType } from '../typing';
import './index.less';

export interface InputProps extends BaseType {
    onChange?: (name, value) => void;
    name?: string;
    value?: any;
}

const Input: FC<InputProps> = ({ name, value, onChange }) => {
    return <input value={value} onChange={e => { onChange(name, e.target.value) }} />
}

export default Input;