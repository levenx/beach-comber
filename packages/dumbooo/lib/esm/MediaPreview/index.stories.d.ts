import { FunctionComponent, ComponentProps } from 'react';
import MediaPreview from './index';
declare const _default: {
    component: typeof MediaPreview;
    title: string;
    argTypes: {
        block: {
            control: {
                type: string;
            };
        };
        type: {
            control: {
                type: string;
                options: string[];
            };
        };
        shape: {
            control: {
                type: string;
                options: string[];
                default: string;
            };
        };
    };
};
export default _default;
export declare const Default: FunctionComponent<ComponentProps<typeof MediaPreview>>;
