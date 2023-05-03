import React, { useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { storage } from "../lib/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import classes from "./UploadImage.module.css";
export default function CircularIntegration({ onChange, url }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imageChanged, setImageChanged] = useState(url);
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  const handleFileInput = (event) => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
    const imageRef = ref(
      storage,
      `images/${event.target.files[0].name + v4()}`
    );
    uploadBytes(imageRef, event.target.files[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageChanged(url);
        setLoading(false);
        setSuccess(true);
        onChange(url);
      });
    });
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center" }}
      className={classes.root}
    >
      <Box sx={{ m: 1, position: "relative" }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          // onClick={handleButtonClick}
          component="label"
        >
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={handleFileInput}
          />
          {success ? <CheckIcon /> : <PhotoCamera />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      {imageChanged && (
        <img src={imageChanged} alt="product" className={classes.image} />
      )}
    </Box>
  );
}
