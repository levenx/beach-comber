/// <reference types="react" />
import './index.less';
interface PreviewProps {
    onClose: () => void;
    title: string;
    content: string;
}
export default function Preview(props: PreviewProps): JSX.Element;
export {};
