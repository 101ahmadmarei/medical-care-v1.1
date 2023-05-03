import { useEffect, useReducer, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import classes from "./FormSide.module.css";
import UploadImage from "./UploadImage";
import NiceUploadImage from "./NiceUploadImage";
import { v4 } from "uuid";
import { green } from "@mui/material/colors";
const initialState = {
  id: "",
  title: "",
  type: "",
  price: "",
  image: "",
};

const FormSide = ({
  state = initialState,
  onOpen,
  onUpdate,
  status,
  // onGetUpdatedProducts,
}) => {
  const { title, type, price, image } = state;
  const [titleC, setTitle] = useState(title);
  const [typeC, setType] = useState(type);
  const [priceC, setPrice] = useState(price);
  const [imageC, setImage] = useState(image);
  const [titleISValid, setTitleIsValid] = useState(!!title);
  const [typeISValid, setTypeIsValid] = useState(!!type);
  const [priceISValid, setPriceIsValid] = useState(!!price);
  const [imageISValid, setImageIsValid] = useState(!!image);
  const formIsValid =
    titleISValid && typeISValid && priceISValid && imageISValid;
  const buttonSx = {
    ...(status === "completed" && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    if (status === "completed") {
      onOpen();
      // onGetUpdatedProducts();
    }
  }, [status]);
  const changeTitleHandler = (e) => {
    setTitle(e.target.value);

    if (e.target.value.trim() !== "") {
      setTitleIsValid(true);
    } else {
      setTitleIsValid(false);
    }
  };
  const changeTypeHandler = (e) => {
    setType(e.target.value);

    if (e.target.value.trim() !== "") {
      setTypeIsValid(true);
    } else {
      setTypeIsValid(false);
    }
  };
  const changePriceHandler = (e) => {
    setPrice(e.target.value);

    if (e.target.value.trim() !== "") {
      setPriceIsValid(true);
    } else {
      setPriceIsValid(false);
    }
  };
  const changeImageHandler = (url) => {
    setImageIsValid(true);
    setImage(url);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submit", myPosition);
    const data = {
      id: state.id,
      title: titleC,
      type: typeC,
      price: priceC,
      image: imageC,
    };

    onUpdate(data);
  };

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        onChange={changeTitleHandler}
        value={titleC}
      />
      <TextField
        id="type"
        label="Type"
        variant="outlined"
        onChange={changeTypeHandler}
        value={typeC}
      />
      <TextField
        id="price"
        label="Price"
        variant="outlined"
        type="number"
        onChange={changePriceHandler}
        value={priceC}
      />
      <NiceUploadImage onChange={changeImageHandler} url={imageC} />
      {/* <UploadImage onChange={changeImageHandler} url={imageC} /> */}
      <Box sx={{ display: "flex", gap: "15px", justifyContent: "flex-end" }}>
        <Box sx={{ m: 1, position: "relative" }}>
          <Button
            variant="contained"
            color="error"
            onClick={onOpen}
            className={classes.button}
          >
            Cancel
          </Button>
        </Box>
        <Box sx={{ m: 1, position: "relative" }}>
          <Button
            variant="contained"
            sx={buttonSx}
            disabled={!formIsValid}
            type="submit"
            className={classes.button}
          >
            Submit
          </Button>
          {status === "pending" && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
      </Box>
    </form>
  );
};

export default FormSide;
