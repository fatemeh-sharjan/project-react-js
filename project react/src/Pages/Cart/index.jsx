import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, removeAll } from "../../Store/Slice/CartSlice";
import { Button, TableFooter } from "@mui/material";
import { Box } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.list);
  let totalPrice = 0;
  const items = products.map((e, index) => {
    {
      totalPrice += e?.quantity * +e?.price?.current?.value;
    }
    return (
      <TableRow key={index}>
        <StyledTableCell sx={{ width: "200px" }}>{e?.id}</StyledTableCell>
        <StyledTableCell sx={{ width: "350px" }}>
          <img
            src={"https://" + e?.media?.images[0]?.url}
            alt=""
            style={{ width: "180px", height: "180px" }}
          />
        </StyledTableCell>
        <StyledTableCell sx={{ width: "400px" }}>{e?.name}</StyledTableCell>
        <StyledTableCell sx={{ width: "120px" }}>
          {e?.price?.current?.text}
        </StyledTableCell>
        <StyledTableCell sx={{ width: "120px" }}>{e?.quantity}</StyledTableCell>
        <StyledTableCell sx={{ width: "120px" }}>
          ${e?.quantity * +e.price?.current?.value}
        </StyledTableCell>
        <StyledTableCell align="right" sx={{ width: "200px" }}>
          <Button
            sx={{ width: "60px", height: "45px" }}
            variant="contained"
            color="error"
            onClick={() => dispatch(removeItem(e?.id))}
          >
            -
          </Button>
          <Button
            sx={{ width: "60px", height: "45px" }}
            variant="contained"
            color="success"
            onClick={() => dispatch(addItem(e))}
          >
            +
          </Button>
        </StyledTableCell>
      </TableRow>
    );
  });

  return (
    <>
      {products?.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Id</StyledTableCell>
                  <StyledTableCell align="left">Image</StyledTableCell>
                  <StyledTableCell align="left">Product Name</StyledTableCell>
                  <StyledTableCell align="left">Price</StyledTableCell>
                  <StyledTableCell align="left">Quantity</StyledTableCell>
                  <StyledTableCell align="left">Total Price</StyledTableCell>
                  <StyledTableCell align="left">Add or Remove</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{items}</TableBody>
              <TableFooter>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>Total Price :</StyledTableCell>
                  <StyledTableCell> {totalPrice}</StyledTableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          <Box
            sx={{
              width: "330px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <Button
              color="error"
              variant="contained"
              sx={{ width: "300px", height: "60px" }}
              onClick={() => dispatch(removeAll())}
            >
              Remove all
            </Button>
          </Box>
        </>
      ) : (
        <Box
          component={"h1"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: "100px",
            height: "100vh",
          }}
        >
          Cart is Empty
        </Box>
      )}
    </>
  );
}
