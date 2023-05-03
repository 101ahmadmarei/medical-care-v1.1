import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, TextField } from "@mui/material";
import classes from "./Form.module.css";
import FormSide from "./FormSide";
import useHttp from "../hooks/use-http";
import { updateProduct, removeProduct } from "../lib/api";
export default function Form({
  open,
  onOpen,
  onAction,
  status,
  state,
  onUpdate,
}) {
  useEffect(() => {
    if (status === "completed") {
      onOpen();
      onUpdate();
    }
  }, [status]);

  return (
    <Modal
      open={open}
      // onClose={onOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.root}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Item
        </Typography>
        <Divider sx={{ width: "100%", marginBottom: "10px" }} />
        <FormSide
          onOpen={onOpen}
          state={state}
          onUpdate={onAction}
          status={status}
          // onGetUpdatedProducts={onGetUpdatedProducts}
        />
      </Box>
    </Modal>
  );
}
