import { ReactNode } from 'react';
export interface BaseType {
    onClick?: (event: any) => void;
    children: ReactNode;
}
