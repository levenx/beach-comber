import React, { FC, Component, ReactNode, useContext, ReactElement } from 'react';
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

export { FormItem };


export interface FormProps extends BaseType {
    initialValues?: Object;
    onValuesChange?: () => void;
    onSubmit?: (values) => void;
    children: typeof FormItem[] | typeof FormItem | any;
}

interface FormState {
    values: Object;
    name?: string;
}


export default class Form extends Component<FormProps, FormState> {

    static Item = FormItem;

    constructor(props: FormProps) {
        super(props);
        this.state = {
            values: {}
        }
    }

    onChange = (name: string, value) => {
        this.setState({ values: Object.assign({}, this.state.values, { [name]: value }) })
    }

    render() {
        const { onSubmit, children } = this.props;
        const { values } = this.state;
        return (
            <Provider value={values}>
                <form className="" onSubmit={(event) => {
                    event.preventDefault();
                    onSubmit(values)
                }}>
                    {
                        Array.isArray(children) ? children.map((child, inx) => {
                            return React.cloneElement(child, { key: inx, onChange: this.onChange })
                        })
                            :
                            React.cloneElement(children, { onChange: this.onChange })
                    }
                </form>
            </Provider>
        )
    }
}
