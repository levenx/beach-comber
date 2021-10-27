import React, { FunctionComponent, ComponentProps } from 'react';
import Button from './index';

export default {
    component: Button,
    title: 'Button',
};

export const Base: FunctionComponent<ComponentProps<typeof Button>> = ({ ...props }) => (
    <div>
        <Button >
            测试
        </Button>
    </div>
);

// export const Large = () => <Base />