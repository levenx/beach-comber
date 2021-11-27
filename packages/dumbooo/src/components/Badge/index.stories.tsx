import React, { FunctionComponent, ComponentProps } from 'react';
import Badge from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Badge,
    title: 'Badge 「角标」',
    argTypes: {

    }
};

export const Default: FunctionComponent<ComponentProps<typeof Badge>> = ({ ...props }) => {
    return <div>
        <Badge onClick={() => { console.log('click!!') }} {...props} dot={true}>
            <div>测试</div>
        </Badge>

        <Badge onClick={() => { console.log('click!!') }} value={66}  {...props} dot={true}>
            <div>测试</div>
        </Badge>
    </div>
}