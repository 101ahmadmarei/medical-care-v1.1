import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import classes from "./ProductCard.module.css";
import { cartCtx } from "../../store/cart-context";
const ProductCard = ({ id, title, type, price, image }) => {
  const myCartCtx = useContext(cartCtx);

  const isItemInCart = myCartCtx.products.some((item) => item.id === id);

  const addToCartHandler = () => {
    // myCartCtx.addProduct({
    //   id,
    //   title,
    //   type,
    //   price,
    //   image,
    // });
    if (!isItemInCart) {
      myCartCtx.addProduct({
        id,
        title,
        type,
        price,
        image,
      });
    } else {
      myCartCtx.removeProduct(id);
    }
  };
  return (
    <Box className={classes.root1}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h6">{type}</Typography>
      <img
        src={image}
        alt=""
        style={{
          borderRadius: "5px",
          width: "100%",
          margin: "20px 0 ",
          height: "200px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">${price}</Typography>
        <Button
          variant={isItemInCart ? "contained" : "outlined"}
          color={isItemInCart ? "error" : "success"}
          sx={{
            borderColor: !isItemInCart && "#2dc071",
            color: !isItemInCart && "#2dc071",
            fontSize: "12px",
          }}
          onClick={addToCartHandler}
        >
          {isItemInCart ? "remove From Cart" : "Add To Cart"}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
