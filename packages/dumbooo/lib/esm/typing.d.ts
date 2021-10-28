import { ReactNode } from 'react';
export interface BaseType {
    className?: string;
    onClick?: (event: any) => void;
    children: ReactNode;
}
