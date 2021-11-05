/// <reference types="react" />
import { BaseType } from '../typing';
import './index.less';
export interface IButton extends BaseType {
    block?: boolean;
    size?: 'large' | 'middle' | 'small';
    type?: 'default' | 'primary' | 'danger' | 'dashed' | 'text' | 'link';
    shape?: 'default' | 'circle' | 'round';
    loading?: boolean;
    disabled?: boolean;
}
export default function MediaPreview(props: IButton): JSX.Element;
