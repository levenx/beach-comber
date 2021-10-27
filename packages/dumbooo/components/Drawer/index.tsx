import React, { ReactNode } from 'react';
import './index.less';

export interface DrawerProps {
    children?: ReactNode;
}

export default function Drawer(props: DrawerProps) {
    return (
        <div>
            Drawer
        </div>
    )
}
