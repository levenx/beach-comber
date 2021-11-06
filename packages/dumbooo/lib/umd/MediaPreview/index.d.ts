/// <reference types="react" />
import { BaseType } from '../typing';
import './index.less';
export interface IMediaPreview extends BaseType {
    visible: boolean;
    medias: Array<string>;
    onClose: () => void;
}
export default function MediaPreview(props: IMediaPreview): JSX.Element;
