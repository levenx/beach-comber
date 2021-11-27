import React, { FunctionComponent, ComponentProps, useState } from 'react';
import Segment from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Segment,
    title: 'Segment 分段器',
    argTypes: {

    }
};

export const Default: FunctionComponent<ComponentProps<typeof Segment>> = ({ ...props }) => {
    const [value, setValue] = useState(1);
    console.log('--->', props)

    const options = [{ text: '测试1', value: 1 }, { text: '测试2', value: 2 }, { text: '测试3', value: 3 }]
    return <div>
        <Segment<number>   {...props} options={options} value={value} onChange={v => setValue(v)} />
    </div>
}