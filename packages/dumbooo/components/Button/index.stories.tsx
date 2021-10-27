import React, { FunctionComponent, ComponentProps } from 'react';
import Button from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Button,
    title: 'Button',
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

export const Base: FunctionComponent<ComponentProps<typeof Button>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Button onClick={() => { console.log('click!!') }} {...props}>
            测试
        </Button>
    </div>
}

// export const Large = () => <Base />