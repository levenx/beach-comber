import React, { FunctionComponent, ComponentProps } from 'react';
import Modal from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Modal,
    title: 'Modal「弹窗」',
    argTypes: {
        block: {
            control: {
                type: 'boolean',
            },
        },
        type: {
            control: {
                type: 'inline-radio',
                options: ['default', 'primary', 'danger', 'dashed', 'text', 'link']
            }
        },
        shape: {
            control: {
                type: 'inline-radio',
                options: ['default', 'circle', 'round'],
                default: 'default'
            }
        },
    }
};

export const Default: FunctionComponent<ComponentProps<typeof Modal>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Modal onClick={() => { console.log('click!!') }} {...props}>
            测试
        </Modal>
    </div>
}

export const Initiative: FunctionComponent<ComponentProps<typeof Modal>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <button onClick={() => {
            Modal.alert({ title: '标题', content: '内容' })
        }}>打开</button>
    </div>
}