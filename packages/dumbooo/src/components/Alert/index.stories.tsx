import React, { FunctionComponent, ComponentProps } from 'react';
import Alert from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Alert,
    title: 'Alert「告示」',
    argTypes: {

    }
};

export const Default: FunctionComponent<ComponentProps<typeof Alert>> = ({ ...props }) => {
    const message = 'Info Description Info Description Info Description Info Description';
    const types: Array<'success' | 'warning' | 'info' | 'error'> = ['success', 'info', 'warning', 'error']
    return <div>
        {
            types.map(type => {
                return <Alert {...props} message={message} type={type} style={{ marginBottom: 20 }} />
            })
        }

    </div>
}