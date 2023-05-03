import React, { useCallback, useEffect } from "react";
import MainTable from "../components/table/MainTable";
import { getAllProducts } from "../components/lib/api";
import useHttp from "../components/hooks/use-http";
import { CircularProgress, Box } from "@mui/material";
const Products = () => {
  const {
    sendRequest,
    status,
    data: loadedProducts,
    error,
  } = useHttp(getAllProducts, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const getAllProductsHandler = () => {
    sendRequest();
  };

  let content = "";
  if (status === "pending") {
    content = (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      {status === "pending" && content}
      {status === error && <p className="centered focused">{error}</p>}
      {status === "completed" && loadedProducts && (
        <MainTable products={loadedProducts} onUpdate={getAllProductsHandler} />
      )}
    </>
  );
};

export default Products;
