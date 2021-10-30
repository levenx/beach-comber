import { FunctionComponent, ComponentProps } from 'react';
import Drawer from './index';
declare const _default: {
    component: typeof Drawer;
    title: string;
    argTypes: {
        visible: {
            control: {
                type: string;
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
export declare const Default: FunctionComponent<ComponentProps<typeof Drawer>>;
