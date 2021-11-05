/// <reference types="react" />
import { BaseType } from '../typing';
import './index.less';
export interface IUpload extends BaseType {
    onUpload: (file: File, onProgress: (progressEvent: any) => void) => Promise<string>;
    files: Array<string>;
}
export default function Upload(props: IUpload): JSX.Element;
