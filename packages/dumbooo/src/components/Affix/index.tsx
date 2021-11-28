import React, { FC, ReactNode, MouseEvent } from 'react';
import { BaseType } from '../typing';
import Icon from '../Icon';
import './index.less';

export interface AffixProps extends BaseType {
    onClick?: (event: MouseEvent) => void;
    icon?: string | ReactNode;
    color?: string;
}

const Affix: FC<AffixProps> = ({ icon, color = "#2B2F36", onClick }) => {
    return <div className="dumbo-affix" onClick={onClick}>
        {
            typeof (icon) === "string" ? <Icon name={icon} color={color} size={22} /> : icon
        }

    </div>
}

export default Affix;