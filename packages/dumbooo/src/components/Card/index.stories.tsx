import React, { FunctionComponent, ComponentProps } from 'react';
import Card from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Card,
    title: 'Card「卡片」',
    argTypes: {
    }
};

export const Default: FunctionComponent<ComponentProps<typeof Card>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Card onClick={() => { console.log('click!!') }} {...props}>
            测试
        </Card>
    </div>
}