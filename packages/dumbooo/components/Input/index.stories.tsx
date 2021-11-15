import React, { FunctionComponent, ComponentProps } from 'react';
import Input from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Input,
    title: 'Input 「输入框」',
    argTypes: {
    }
};

export const Default: FunctionComponent<ComponentProps<typeof Input>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Input onClick={() => { console.log('click!!') }} {...props}>
            测试
        </Input>
    </div>
}