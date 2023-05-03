import React, { useState, useRef, useEffect, useCallback } from "react";
import Table from "./Table";
import { Box, Button, CircularProgress, Container } from "@mui/material";
import Form from "./Form";
import RemoveModal from "./RemoveModal";
import useHttp from "../hooks/use-http";
import { addProduct } from "../lib/api";
const MainTable = ({ products, onUpdate }) => {
  const [openForm, setOpenForm] = useState(false);

  const { sendRequest: sendAddRequest, status: addStatus } =
    useHttp(addProduct);

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  const addProductHandler = (product) => {
    sendAddRequest(product);
  };

  // const getUpdatedProducts = useCallback(() => {
  //   sendRequest();
  // }, [sendRequest]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 138px);",
        backgroundColor: "#ededee",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            left: "50%",
            top: "20%",
            transform: "translate(-50%,5%)",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ p: "15px", marginBottom: "16px" }}
            onClick={handleOpenForm}
          >
            Add New Item
          </Button>
          <Table products={products} onUpdate={onUpdate} />
        </Box>
        <Form
          onOpen={handleOpenForm}
          open={openForm}
          onAction={addProductHandler}
          status={addStatus}
          onUpdate={onUpdate}
          // onGetUpdatedProducts={getUpdatedProducts}
        />
      </Container>
    </Box>
  );
};

export default MainTable;
