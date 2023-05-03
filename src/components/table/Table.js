import React, { Fragment, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { Box, Card, IconButton, Paper } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Form from "./Form";
import RemoveModal from "./RemoveModal";
import useHttp from "../hooks/use-http";
import { updateProduct, removeProduct } from "../lib/api";
export default function AccessibleTable({ products, onUpdate }) {
  const [openForm, setOpenForm] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [initialState, setInitialState] = useState({});
  const [deleteId, setDeleteId] = useState("");
  const { sendRequest: sendEditRequest, status: editStatus } =
    useHttp(updateProduct);
  const { sendRequest: sendRemoveRequest, status: removeStatus } =
    useHttp(removeProduct);

  const editElement = (item) => {
    sendEditRequest(item);
  };
  const removeElement = (id) => {
    sendRemoveRequest(id);
  };

  const handleOpenForm = (item = {}) => {
    setOpenForm(!openForm);
    setInitialState(item);
  };
  const handleOpenRemoveModal = (id) => {
    setOpenRemoveModal(!openRemoveModal);
    setDeleteId(id);
  };

  return (
    <Fragment>
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          // p: { md: "0 30px 30px" },
          boxSizing: "border-box",
          maxHeight: 450,
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          {products.length === 0 && (
            <caption style={{ textAlign: "center" }}>No Data</caption>
          )}
          <TableHead>
            <TableRow sx={{ backgroundColor: "black" }}>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                #
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Image
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Title
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Type
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Price
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, i) => (
              <TableRow key={row.id}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold" }}
                >
                  {i + 1}
                </TableCell>
                <TableCell align="center">
                  <img
                    src={row.image}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="edit"
                    color="success"
                    onClick={handleOpenForm.bind(null, row)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={handleOpenRemoveModal.bind(null, row.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {openForm && (
        <Form
          open={openForm}
          onOpen={handleOpenForm}
          state={initialState}
          onAction={editElement}
          status={editStatus}
          onUpdate={onUpdate}
        />
      )}
      {openRemoveModal && (
        <RemoveModal
          open={openRemoveModal}
          onOpen={handleOpenRemoveModal}
          onRemove={removeElement.bind(null, deleteId)}
          status={removeStatus}
          onUpdate={onUpdate}
        />
      )}
    </Fragment>
  );
}
