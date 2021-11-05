/// <reference types="react" />
import { BaseType } from '../typing';
import './index.less';
export interface IProgress extends BaseType {
    percent: number;
}
export default function Progress(props: IProgress): JSX.Element;
