/// <reference types="react" />
import { BaseType } from '../typing';
import '../style/font.css';
import './index.less';
export interface IconProps extends BaseType {
    name: string;
    size?: number;
    color?: string;
}
export default function Icon(props: IconProps): JSX.Element;
