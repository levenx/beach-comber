import React, { FunctionComponent, ComponentProps } from 'react';
import Pagination from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Pagination,
    title: 'Pagination',
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

export const Default: FunctionComponent<ComponentProps<typeof Pagination>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Pagination onClick={() => { console.log('click!!') }} {...props}>
            测试
        </Pagination>
    </div>
}