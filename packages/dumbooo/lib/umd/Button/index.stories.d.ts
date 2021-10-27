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
        backgroundColor: {
            control: string;
        };
        loadingState: {
            control: {
                type: string;
                options: string[];
            };
        };
        width: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
        };
    };
};
export default _default;
export declare const Base: FunctionComponent<ComponentProps<typeof Button>>;
