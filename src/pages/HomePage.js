import React, { useEffect } from "react";
import Header from "../components/basicInfo/Header";
import ShopCards from "../components/shopCard/ShopCards";
import ProductCards from "../components/productCARDS/ProductCards";
import Services from "../components/services/Services";
import Featured from "../components/featured/Featured";
import Reviews from "../components/reviews/Reviews";
import Contact from "../components/contact/Contact";
import Subscribe from "../components/subscribe/Subscribe";
import { getAllProducts } from "../components/lib/api";
import useHttp from "../components/hooks/use-http";
import { CircularProgress, Box } from "@mui/material";
const Home = () => {
  const {
    sendRequest,
    status,
    data: loadedProducts,
    error,
  } = useHttp(getAllProducts, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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
      <Header />
      <ShopCards />
      {status === "pending" && content}
      {status === error && <p className="centered focused">{error}</p>}
      {status === "completed" && loadedProducts && (
        <ProductCards products={loadedProducts} />
      )}
      <Services />
      <Featured />
      <Reviews />
      <Contact />
      <Subscribe />
    </>
  );
};

export default Home;
