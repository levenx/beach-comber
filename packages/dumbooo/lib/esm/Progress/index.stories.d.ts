import { FunctionComponent, ComponentProps } from 'react';
import Progress from './index';
declare const _default: {
    component: typeof Progress;
    title: string;
    argTypes: {
        percent: {
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
export declare const Default: FunctionComponent<ComponentProps<typeof Progress>>;
