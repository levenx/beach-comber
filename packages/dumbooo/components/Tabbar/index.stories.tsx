import React, { FunctionComponent, ComponentProps } from 'react';
import Tabbar from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Tabbar,
    title: 'Tabbar',
    argTypes: {

    }
};

export const Default: FunctionComponent<ComponentProps<typeof Tabbar>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Tabbar onClick={() => { console.log('click!!') }} {...props}>
            测试
        </Tabbar>
    </div>
}