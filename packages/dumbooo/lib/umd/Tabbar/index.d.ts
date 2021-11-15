/// <reference types="react" />
import { BaseType } from '../typing';
import './index.less';
export interface TabbarProps extends BaseType {
    block?: boolean;
    size?: 'large' | 'middle' | 'small';
    type?: 'default' | 'primary' | 'danger' | 'dashed' | 'text' | 'link';
    shape?: 'default' | 'circle' | 'round';
    loading?: boolean;
    disabled?: boolean;
}
export default function Tabbar(props: TabbarProps): JSX.Element;
