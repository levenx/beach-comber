import React, { ReactNode } from 'react';
export interface BaseType {
    className?: string;
    onClick?: (event) => void;
    children: ReactNode;
}