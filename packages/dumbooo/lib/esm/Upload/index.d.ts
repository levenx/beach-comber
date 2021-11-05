/// <reference types="react" />
import { BaseType } from '../typing';
import './index.less';
export interface IUpload extends BaseType {
    onUpload: (file: File, onProgress: (progressEvent: any) => void) => Promise<string>;
    files: Array<string>;
    mode: 'modal' | 'default';
    onItemClick: (image: string) => void;
}
export default function Upload(props: IUpload): JSX.Element;
