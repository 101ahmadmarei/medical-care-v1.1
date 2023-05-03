import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import Item from "./Item";
import classes from "./Cart.module.css";
import { cartCtx } from "../../store/cart-context";
const data = [
  {
    id: 1,
    title: "Nutritional support",
    type: "Technology",
    price: 6.48,
    image: "/assets/images/p8.png",
  },
  {
    id: 2,
    title: "Nutritional support",
    type: "Technology",
    price: 8.48,
    image: "/assets/images/p1.png",
  },
  {
    id: 3,
    title: "Orthopedics",
    type: "Technology",
    price: 6.48,
    image: "/assets/images/p2.png",
  },
  {
    id: 4,
    title: "Cancer center",
    type: "Technology",
    price: 6.48,
    image: "/assets/images/p3.png",
  },
  {
    id: 5,
    title: "Orthopedics",
    type: "Technology",
    price: 6.48,
    image: "/assets/images/p4.png",
  },
  {
    id: 6,
    title: "Cancer center",
    type: "Technology",
    price: 6.48,
    image: "/assets/images/p5.png",
  },
  {
    id: 7,
    title: "Cancer center",
    type: "Technology",
    price: 6.48,
    image: "/assets/images/p6.png",
  },
  {
    id: 8,
    title: "Prenatal care",
    type: "Technology",
    price: 6.48,
    image: "/assets/images/p1.png",
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 5,
  pb: 3,
  borderColor: "white",
  borderRadius: "5px",
};

const Cart = () => {
  const myCartCtx = useContext(cartCtx);
  const totalPrice = myCartCtx.products.reduce(
    (acc, product) => acc + product.price,
    0
  );
  const handleClose = () => {
    myCartCtx.closeModal();
  };
  return (
    <Modal
      open={myCartCtx.open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 270 }} className={classes.modal}>
        <Box className={classes.header}>
          <Box className={classes.icons}>
            <BsCart
              id="shopping"
              fontSize="large"
              style={{ color: "#737373", marginRight: "5px" }}
            />
            <Typography className={classes.quantity}>
              {myCartCtx.products.length}
            </Typography>
          </Box>

          <Typography
            sx={{ color: "#737373", fontSize: "12px", fontWeight: "bold" }}
          >
            Total:
            <span style={{ color: "rgb(11 90 234 / 97%)", fontWeight: "bold" }}>
              ${totalPrice}
            </span>
          </Typography>
        </Box>
        <Divider
          sx={{ width: "130%", marginLeft: "-15%", marginBottom: "10px" }}
        />
        {myCartCtx.products.map((product) => (
          <Item {...product} />
        ))}
        <Box>
          {myCartCtx.products.length === 0 ? (
            <>
              <Typography
                sx={{ color: "#737373", fontSize: "12px", fontWeight: "bold" }}
              >
                Your cart is empty
              </Typography>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={myCartCtx.closeModal}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button variant="contained" sx={{ width: "100%" }}>
              Checkout
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default Cart;
