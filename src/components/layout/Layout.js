import React, { Fragment } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
