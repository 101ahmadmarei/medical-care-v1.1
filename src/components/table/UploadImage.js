import React, { useState } from "react";
import Button from "@mui/material/Button";
import classes from "./UploadImage.module.css";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { storage } from "../lib/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
export default function ImageUpload({ onChange, url }) {
  // const [selectedFile, setSelectedFile] = useState(imageC);
  const [imageChanged, setImageChanged] = useState(url);
  const handleFileInput = (event) => {
    const imageRef = ref(
      storage,
      `images/${event.target.files[0].name + v4()}`
    );
    uploadBytes(imageRef, event.target.files[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageChanged(url);
        onChange(url);
      });
    });
  };

  return (
    <div className={classes.root}>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={handleFileInput}
        />
        <PhotoCamera sx={{ width: "50px", height: "50px" }} />
      </IconButton>
      {imageChanged && (
        <img src={imageChanged} alt="product" className={classes.image} />
      )}
    </div>
  );
}
