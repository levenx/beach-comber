import React, { FC, Component, ReactNode } from 'react';
import { BaseType } from '../typing';
import './index.less';
interface FormItemProps {
    label: string | ReactNode;
    name: string | number;
    value?: string | number;
    rules?: any;
    trigger?: any;
    children?: any;
    onChange?: (name: string, value: any) => void;
}
declare const FormItem: FC<FormItemProps>;
export { FormItem };
export interface FormProps extends BaseType {
    initialValues?: Object;
    onValuesChange?: () => void;
    onSubmit?: (values: any) => void;
    children: typeof FormItem[] | typeof FormItem | any;
}
interface FormState {
    values: Object;
    name?: string;
}
export default class Form extends Component<FormProps, FormState> {
    static Item: React.FC<FormItemProps>;
    constructor(props: FormProps);
    onChange: (name: string, value: any) => void;
    render(): JSX.Element;
}
