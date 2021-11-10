import { ReactNode, CSSProperties } from 'react';
export interface BaseType {
    className?: string;
    style?: CSSProperties;
    onClick?: (event: any) => void;
    children?: ReactNode;
}
