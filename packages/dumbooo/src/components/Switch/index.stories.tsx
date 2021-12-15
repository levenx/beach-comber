import React, { FunctionComponent, ComponentProps, useState } from 'react';
import Switch from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Switch,
    title: 'Switch「开关」',
    argTypes: {

    }
};

export const Default: FunctionComponent<ComponentProps<typeof Switch>> = ({ ...props }) => {
    const [visible, setVisible] = useState(false);
    return <div>
        <Switch checked={visible} onChange={setVisible} />
    </div>
}