import { useCallback, useEffect, useState, useContext } from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import { getAllProducts } from "./components/lib/api";
import useHttp from "./components/hooks/use-http";
import CircularProgress from "@mui/material/CircularProgress";
import { productsCtx } from "./store/products-context";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>Page Not Found</h1>}
        />
      </Routes>
    </Layout>
  );
}

export default App;
