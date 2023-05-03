import React, { useState, useContext } from "react";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Drawer from "./Drawer";
import Cart from "../cart/Cart";
import { cartCtx } from "../../store/cart-context";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const myCartCtx = useContext(cartCtx);

  const handleToggle = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <Navbar1 />
      <Navbar2 onToggle={handleToggle} />
      {openDrawer && <Drawer />}
      {myCartCtx.open && <Cart />}
    </>
  );
};

export default Navbar;
