import React, { FunctionComponent, ComponentProps } from 'react';
import Progress from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Progress,
    title: 'Progress',
    argTypes: {
        percent: {
            control: {
                type: 'range',
                min: 0,
                max: 100,
                step: 1,
            }
        }
    }
};

export const Default: FunctionComponent<ComponentProps<typeof Progress>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Progress onClick={() => { console.log('click!!') }} {...props} />
        <br />
        <Progress onClick={() => { console.log('click!!') }} {...props} />
    </div>
}