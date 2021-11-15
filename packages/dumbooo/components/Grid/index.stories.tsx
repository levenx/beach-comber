import React, { FunctionComponent, ComponentProps } from 'react';
import Grid from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Grid,
    title: 'Grid 「格子布局」',
    argTypes: {
    }
};

export const Default: FunctionComponent<ComponentProps<typeof Grid>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Grid onClick={() => { console.log('click!!') }} {...props}>
            <div>11</div>
            <div>22</div>
            <div>11</div>
            <div>22</div>
            <div>11</div>
            <div>22</div>
        </Grid>
    </div>
}