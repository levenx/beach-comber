import React, { FunctionComponent, ComponentProps } from 'react';
import Drawer from './index';

export default {
    component: Drawer,
    title: 'Drawer',
    argTypes: {
        visible: {
            control: {
                type: 'boolean',
            },
        },
        width: {
            control: {
                type: 'range',
                min: 100,
                max: 800,
                step: 1,
            }
        }
    }
};

export const Base: FunctionComponent<ComponentProps<typeof Drawer>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Drawer {...props}>
            测试
        </Drawer>
    </div>
}

// export const Large = () => <Base />