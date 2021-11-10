import React, { FunctionComponent, ComponentProps } from 'react';
import Avatar from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Avatar,
    title: 'Avatar',
    argTypes: {

    }
};

export const Default: FunctionComponent<ComponentProps<typeof Avatar>> = ({ ...props }) => {
    console.log('--->', props)
    const src = 'https://joeschmoe.io/api/v1/random';
    return <div>
        <Avatar {...props} src={src} size={200}>
            测试
        </Avatar>
    </div>
}