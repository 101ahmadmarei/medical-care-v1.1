import { createContext, useState } from "react";

export const cartCtx = createContext({
  open: false,
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  openModal: () => {},
  closeModal: () => {},
});

const CartCtxProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const addProduct = (item) => {
    setProducts([...products, item]);
  };
  const removeProduct = (id) => {
    const itemPrice = products.filter((item) => item.id == id).price;
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== id)
    );
  };
  const value = {
    open,
    openModal,
    closeModal,
    products,
    addProduct,
    removeProduct,
  };
  return <cartCtx.Provider value={value}>{children}</cartCtx.Provider>;
};
export default CartCtxProvider;
