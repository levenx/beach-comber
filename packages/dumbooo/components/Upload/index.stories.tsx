import React, { FunctionComponent, ComponentProps } from 'react';
import Upload from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Upload,
    title: 'Upload',
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

export const Default: FunctionComponent<ComponentProps<typeof Upload>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Upload onClick={() => { console.log('click!!') }} {...props}>
            测试
        </Upload>
    </div>
}