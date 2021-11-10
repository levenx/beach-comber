/// <reference types="react" />
import { BaseType } from '../typing';
import './index.less';
export interface AvatarProps extends BaseType {
    src: string;
    alt?: string;
    size?: 'large' | 'middle' | 'small' | number;
    shape?: 'circle' | 'round';
}
export default function Avatar(props: AvatarProps): JSX.Element;
