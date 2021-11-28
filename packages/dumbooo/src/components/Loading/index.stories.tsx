import React, { FunctionComponent, ComponentProps } from 'react';
import Loading from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Loading,
    title: 'Loading',
    argTypes: {
        loading: {
            control: {
                type: 'boolean',
            }
        },
        size: {
            control: {
                type: 'range',
                min: 100,
                max: 800,
                step: 1,
            }
        }
    }
};

export const Default: FunctionComponent<ComponentProps<typeof Loading>> = ({ ...props }) => {

    return <div>
        <Loading loading={true}  {...props}>
        </Loading>
    </div>
}