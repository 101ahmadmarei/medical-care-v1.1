import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";
import { green } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

export default function BasicModal({
  open,
  onOpen,
  onRemove,
  status,
  onUpdate,
}) {
  const buttonSx = {
    ...(status === "completed" && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    if (status === "completed") {
      onOpen();
      onUpdate();
    }
  }, [status]);

  return (
    <Modal
      open={open}
      onClose={onOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to delete this Product?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            mt: "20px",
          }}
        >
          <Box sx={{ m: 1, position: "relative" }}>
            <Button
              variant="contained"
              color="info"
              onClick={onOpen}
              // className={classes.button}
            >
              Cancel
            </Button>
          </Box>
          <Box sx={{ m: 1, position: "relative" }}>
            <Button
              variant="contained"
              sx={buttonSx}
              // disabled={!formIsValid}
              type="submit"
              // className={classes.button}
              color="error"
              onClick={onRemove}
            >
              Delete
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
      </Box>
    </Modal>
  );
}
