import React, { FunctionComponent, ComponentProps } from 'react';
import Navbar from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Navbar,
    title: 'Navbar 「输入框」',
    argTypes: {
    }
};

export const Default: FunctionComponent<ComponentProps<typeof Navbar>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Navbar onClick={() => { console.log('click!!') }} {...props}>
            测试
        </Navbar>
    </div>
}