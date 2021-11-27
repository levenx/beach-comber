import React, { FunctionComponent, ComponentProps } from 'react';
import MediaPreview from './index';

// control参考文档： https://xiday.com/2020/09/27/storybook/
export default {
    component: MediaPreview,
    title: 'MediaPreview「预览器」',
    argTypes: {

    }
};

export const Default: FunctionComponent<ComponentProps<typeof MediaPreview>> = ({ ...props }) => {
    console.log('--->', props)
    const medias = ['https://cdn.jsdelivr.net/gh/levenx/picture@master/material/24548436ec3e47beb28b237716b04a99.png'];
    return <div>
        <MediaPreview {...props} medias={medias}>
        </MediaPreview>
    </div>
}