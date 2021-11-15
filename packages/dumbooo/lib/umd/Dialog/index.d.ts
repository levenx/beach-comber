/// <reference types="react" />
import { BaseType } from '../typing';
import './index.less';
interface IDialog extends BaseType {
    title: string;
    content: string;
    onClose?: () => void;
}
interface IAlert {
    title: string;
    content: string;
}
declare function Dialog(props: IDialog): JSX.Element;
declare namespace Dialog {
    var alert: ({ title, content }: IAlert) => number;
}
export default Dialog;
