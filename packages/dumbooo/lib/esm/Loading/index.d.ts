/// <reference types="react" />
import { BaseType } from '../typing';
import './index.less';
export interface IButton extends BaseType {
    size?: number | string;
    loading: boolean;
}
export default function Button(props: IButton): JSX.Element;
