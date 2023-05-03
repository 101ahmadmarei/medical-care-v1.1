import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CartCtxProvider from "./store/cart-context";
import ProductsCtxProvider from "./store/products-context";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartCtxProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartCtxProvider>
  </BrowserRouter>
);
