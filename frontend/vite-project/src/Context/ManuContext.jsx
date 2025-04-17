
import React, { createContext, useState } from 'react';
import { product } from '../assets/assets';

export const ManuContext = createContext();

export const ManuContextProvider = ({ children }) => {
  const [products, setProducts] = useState(product);

  return (
    <ManuContext.Provider value={{ products, setProducts }}>
      {children}
    </ManuContext.Provider>
  );
};
