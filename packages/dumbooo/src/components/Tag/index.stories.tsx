import React, { FunctionComponent, ComponentProps } from 'react';
import Tag from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Tag,
    title: 'Tag「标签」',
    argTypes: {

    }
};

export const Default: FunctionComponent<ComponentProps<typeof Tag>> = ({ ...props }) => {
    console.log('--->', props)
    return <div style={{ display: 'flex', gap: 20 }}>
        <Tag onClick={() => { console.log('click!!') }} {...props} name="标签" />

        <Tag onClick={() => { console.log('click!!') }} {...props} name="标签" color="orange" />

        <Tag onClick={() => { console.log('click!!') }} {...props} name="标签" color="red" />
    </div>
}