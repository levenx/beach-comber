import { FunctionComponent, ComponentProps } from 'react';
import Drawer from './index';
declare const _default: {
    component: typeof Drawer;
    title: string;
    argTypes: {
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
export declare const Base: FunctionComponent<ComponentProps<typeof Drawer>>;
