import React, { FunctionComponent, ComponentProps } from 'react';
import Dialog from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Dialog,
    title: 'Dialog 「弹窗」',
    argTypes: {
    }
};

export const Default: FunctionComponent<ComponentProps<typeof Dialog>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Dialog onClick={() => { console.log('click!!') }} {...props}>
            测试
        </Dialog>
    </div>
}

export const Method: FunctionComponent<ComponentProps<typeof Dialog>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <div onClick={() => Dialog.alert({ title: 'xxx', content: 'xxxx' })}>点击</div>
    </div>
}