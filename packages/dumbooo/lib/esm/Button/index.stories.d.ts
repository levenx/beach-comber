import { FunctionComponent, ComponentProps } from 'react';
import Button from './index';
declare const _default: {
    component: typeof Button;
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
export declare const Base: FunctionComponent<ComponentProps<typeof Button>>;
