import { FunctionComponent, ComponentProps } from 'react';
import Icon from './index';
declare const _default: {
    component: typeof Icon;
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
export declare const Default: FunctionComponent<ComponentProps<typeof Icon>>;
