import React, { createContext } from 'react';

const context = createContext({});
const { Provider, Consumer } = context;
export { context, Provider, Consumer }