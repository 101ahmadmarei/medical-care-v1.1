import { createContext, useState } from "react";

export const productsCtx = createContext({
  products: [],
  productsChange: () => {},
});

const ProductsCtxProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const productsChange = (Items) => {
    setProducts(Items);
  };
  const value = {
    products,
    productsChange,
  };
  return <productsCtx.Provider value={value}>{children}</productsCtx.Provider>;
};
export default ProductsCtxProvider;
