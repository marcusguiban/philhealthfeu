import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, Container, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";


const TransactionList = () => {
  const [transactions, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    let url = "http://localhost:5000/api/transaction";

    const requestOptions = {
      signal: controller.signal,
      method: "GET"

    };

    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        
        setTransaction(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>

    <Container sx={{py:10}}>
    <Typography variant="h4" align="center" color={"green"}> Transactions Made </Typography>

      {loading ? (
        <Typography variant="h6" align="center" color={"palevioletred"}> Loading...</Typography>
      ) : (
        <Container sx={{py:10}}>

          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>PatientID</TableCell>
            <TableCell>DoctorID</TableCell>
            <TableCell>Description Of Visit</TableCell>
            <TableCell>Hospital Name</TableCell>
            <TableCell>Mode of Payment</TableCell>
            <TableCell >Received By:</TableCell>
            <TableCell >Paid by:</TableCell>
            <TableCell >Amount</TableCell>
            <TableCell >OR Number</TableCell>
            <TableCell >View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
            key={transaction.id} 
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{transaction.TransactionID}</TableCell>
              <TableCell >{transaction.Date}</TableCell>
              <TableCell >{transaction.Address}, {transaction.Barangay}, {transaction.City}, {transaction.Province}, {transaction.Region}, {transaction.PostalCode}</TableCell>
              <TableCell >{transaction.PatientID}</TableCell>
              <TableCell >{transaction.DoctorID}</TableCell>
              <TableCell >{transaction.DescriptionOfVisit}</TableCell>
              <TableCell >{transaction.HospitalName}</TableCell>
              <TableCell >{transaction.ModeOfPayment}</TableCell>
              <TableCell >{transaction.ReceivedBy}</TableCell>
              <TableCell >{transaction.PaidBy}</TableCell>
              <TableCell >{transaction.Amount}</TableCell>
              <TableCell >{transaction.ORnumber}</TableCell>
              <TableCell >
                <Link to={`/transaction/${transaction._id}`} style={{ color: 'green'}}><VisibilityIcon /></Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{mx:5, my:5}}>
      <Link to="/transaction-form">
    <Button  variant="outlined" color="success">New Transaction</Button>

      </Link>
            </Stack>
    
        </Container>
      )}
    </Container>

    </>
  );
};

export default TransactionList;