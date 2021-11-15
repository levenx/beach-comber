import React, { FC } from 'react';
import { BaseType } from '../typing';
import Icon from '../Icon';
import './index.less';

export interface AffixProps extends BaseType {
    onChange?: (name, value) => void;
    name?: string;
    value?: any;
}

const Affix: FC<AffixProps> = ({ name, value, onChange }) => {
    return <div className="dumbo-affix">
        <Icon name="picture" color="#2B2F36" size={22} />
    </div>
}

export default Affix;