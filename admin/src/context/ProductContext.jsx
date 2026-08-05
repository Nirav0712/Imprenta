import { createContext, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  return (
    <ProductContext.Provider value={{}}>
      {children}
    </ProductContext.Provider>
  );

};

export const useProductContext = () => useContext(ProductContext);