import React, { createContext, useContext } from 'react';

const ShowSalePriceContext = createContext<boolean>(false);

export const ShowSalePriceProvider: React.FC<{ value: boolean, children: React.ReactNode }> = ({ value, children }) => {
  return (
    <ShowSalePriceContext.Provider value={value}>
      {children}
    </ShowSalePriceContext.Provider>
  );
};

export const useShowSalePrice = () => useContext(ShowSalePriceContext);