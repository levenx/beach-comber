import React, { FunctionComponent, ComponentProps } from 'react';
import TabBar from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: TabBar,
    title: 'TabBar',
    argTypes: {

    }
};

export const Default: FunctionComponent<ComponentProps<typeof TabBar>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <TabBar  {...props}>
            <div>测试1</div>
            <div>测试2</div>
        </TabBar>
    </div>
}