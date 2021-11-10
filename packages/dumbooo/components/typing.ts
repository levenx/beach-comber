import React, { ReactNode, CSSProperties } from 'react';
export interface BaseType {
    className?: string;
    style?: CSSProperties;
    onClick?: (event) => void;
    children?: ReactNode;
}