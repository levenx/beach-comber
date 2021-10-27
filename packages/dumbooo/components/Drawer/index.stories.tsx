import React, { FunctionComponent, ComponentProps } from 'react';
import Drawer from './index';

export default {
    component: Drawer,
    title: 'Drawer',
    argTypes: {
        backgroundColor: { control: 'color' },
        loadingState: {
            control: {
                type: 'inline-radio',
                options: ['loading', 'error', 'ready'],
            },
        },
        width: {
            control: {
                type: 'range',
                min: 400,
                max: 1200,
                step: 50,
            },
        }
    }
};

export const Base: FunctionComponent<ComponentProps<typeof Drawer>> = ({ ...props }) => {
    console.log('--->',props)
    return <div>
        <Drawer >
            测试
        </Drawer>
    </div>
}

// export const Large = () => <Base />