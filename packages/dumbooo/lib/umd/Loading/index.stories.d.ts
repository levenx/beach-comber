import { FunctionComponent, ComponentProps } from 'react';
import Loading from './index';
declare const _default: {
    component: typeof Loading;
    title: string;
    argTypes: {
        loading: {
            control: {
                type: string;
            };
        };
        size: {
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
export declare const Default: FunctionComponent<ComponentProps<typeof Loading>>;
