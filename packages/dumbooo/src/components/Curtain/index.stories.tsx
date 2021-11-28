import React, { FunctionComponent, ComponentProps } from 'react';
import Curtain from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Curtain,
    title: 'Curtain 幕帘',
    argTypes: {

    }
};

export const Default: FunctionComponent<ComponentProps<typeof Curtain>> = ({ ...props }) => {
    const content = <div style={{ border: '1px solild' }}>111</div>
    return <div>
        <Curtain {...props} content={content} />
    </div>
}