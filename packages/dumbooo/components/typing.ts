import React, { ReactNode } from 'react';
export interface BaseType {
    onClick?: (event) => void;
    children: ReactNode;
}