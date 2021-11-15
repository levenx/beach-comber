import React, { FunctionComponent, ComponentProps } from 'react';
import Divider from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Divider,
    title: 'Divider 「分割线」',
    argTypes: {
    }
};

export const Default: FunctionComponent<ComponentProps<typeof Divider>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Divider onClick={() => { console.log('click!!') }} {...props}>
        </Divider>
    </div>
}