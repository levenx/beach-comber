import React, { FC, Component, ReactNode, useContext, useState } from 'react';
import { Provider, context } from './context';
import { BaseType } from '../typing';
import './index.less';

interface FormItemProps {
    label: string | ReactNode;
    name: string | number;
    value?: string | number;
    rules?: any;
    trigger?: any;
    children?: any;
    onChange?: (name: string, value) => void;
}

export interface FormProps extends BaseType {
    initialValues?: Object;
    onValuesChange?: () => void;
    onSubmit?: (values) => void;
    children: typeof FormItem[] | typeof FormItem | any;
}

const FormItem: FC<FormItemProps> = ({ label, name, value, rules, trigger, children, onChange }) => {
    const curValue = useContext(context)[name];
    return <div className="sail-cell sail-item">
        <div className="sail-item-label">
            <span>{label}</span>
        </div>
        <div className="sail-item-value">
            <div className="sail-item-body">
                {React.cloneElement(children, { onChange, name, value: curValue })}
            </div>
            <div className="sail-item-error"></div>
        </div>
    </div>
}

const Form: FC<FormProps> & { Item: FC<FormItemProps> } = (props) => {
    const { onSubmit, children } = props;
    const [values, setValues] = useState({});

    const onChange = (name: string, value) => {
        setValues({ ...values, [name]: value })
    }
    return (
        <Provider value={values}>
            <form className="" onSubmit={(event) => {
                event.preventDefault();
                onSubmit(values)
            }}>
                {
                    Array.isArray(children) ? children.map((child, inx) => {
                        return React.cloneElement(child, { key: inx, onChange })
                    })
                        :
                        React.cloneElement(children, { onChange })
                }
            </form>
        </Provider>
    )
}

Form.Item = FormItem;

export default Form;