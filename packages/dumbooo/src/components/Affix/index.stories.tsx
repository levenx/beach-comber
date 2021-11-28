import React, { FunctionComponent, ComponentProps } from 'react';
import Affix from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: Affix,
    title: 'Affix 「固钉」',
    argTypes: {
    }
};

export const Default: FunctionComponent<ComponentProps<typeof Affix>> = ({ ...props }) => {
    console.log('--->', props)
    return <div>
        <Affix onClick={() => { console.log('click!!') }} {...props} icon={'picture'}>
            测试
        </Affix>
    </div>
}