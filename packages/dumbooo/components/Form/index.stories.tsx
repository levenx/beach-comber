import React, { FunctionComponent, ComponentProps } from 'react';
import Form from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Form,
    title: 'Form 「表单」',
    argTypes: {

    }
};

export const Default: FunctionComponent<ComponentProps<typeof Form>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Form onClick={() => { console.log('click!!') }} {...props}>
            测试
        </Form>
    </div>
}