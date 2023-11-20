import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack, TextField } from "@mui/material"


const TransactionEdit = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState({
password: " "
  });
  const navigate = useNavigate();


  useEffect(() => {
    let url = `http://127.0.0.1:5000/api/transaction/${id}`;

    const controller = new AbortController();

    const requestOptions = {
      method: "GET",
      headers: {
        signal: controller.signal,
        "Content-Type": "application/json",

      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => setTransaction(json));

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleChanged = (e) => {
    setTransaction((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:5000/api/transaction/`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        UserName: transaction.UserName,
        Password: transaction.Password,
        Amount: transaction.Amount,
        ORnumber: transaction.ORnumber,
        ModeOfPayment: transaction.ModeOfPayment,
        ReceivedBy: transaction.ReceivedBy,
        PaidBy: transaction.PaidBy,
        HospitalName: transaction.HospitalName,
        Date: transaction.Date,
        Address: transaction.Address,
        Barangay: transaction.Barangay,
        City: transaction.City,
        Province: transaction.Province,
        Region: transaction.Region,
        PostalCode: transaction.PostalCode,
        DescriptionOfVisit: transaction.DescriptionOfVisit,
        PatientID: transaction.PatientID,
        DoctorID: transaction.DoctorID,
        id: id
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => navigate(`/transaction/${id}`))
      .catch((error) => console.log(error));
  };

  return (
    <>

      <Typography variant="h4" sx={{px:5, py:5}} align="center" color={"palevioletred"}>Edit Admin {transaction.TransactionID}</Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ px:10, py:10}}>
<Stack direction={"column"} spacing={8} align="center">
          <Stack>
            <Stack direction={"column"} spacing={4} justifyContent={"center"} >
            <TextField helperText="User Name" variant="standard" type="text" required  name="UserName" onChange={handleChanged} value={transaction.UserName}/>
                <TextField helperText="Password" variant="standard" type="Password" name="Password" onChange={handleChanged} value={transaction.Password}/>
                <TextField helperText="Amount" variant="standard" type="number" name="Amount" onChange={handleChanged} value={transaction.Amount}/>
                <TextField helperText="OR number" variant="standard" type="text" name="ORnumber" onChange={handleChanged} value={transaction.ORnumber}/>
                <TextField helperText="Mode Of Payment" variant="standard" type="text" name="ModeOfPayment" onChange={handleChanged} value={transaction.ModeOfPayment}/>
                <TextField helperText="Received By" variant="standard" type="text" name="ReceivedBy" onChange={handleChanged} value={transaction.ReceivedBy}/>
                <TextField helperText="Paid By" variant="standard" type="text" name="PaidBy" onChange={handleChanged} value={transaction.PaidBy}/>
                <TextField helperText="HospitalName" variant="standard" type="text" name="HospitalName" onChange={handleChanged} value={transaction.HospitalName}/>
                <TextField helperText="Date" variant="standard" type="Date" required  name="Date" onChange={handleChanged} value={transaction.Date}/>
                <TextField helperText="Address" variant="standard" type="text" required  name="Address" onChange={handleChanged} value={transaction.Address}/>
                <TextField helperText="Barangay" variant="standard" type="text" required  name="Barangay" onChange={handleChanged} value={transaction.Barangay}/>
                <TextField helperText="City" variant="standard" type="text" required  name="City" onChange={handleChanged} value={transaction.City}/>
                <TextField helperText="Province" variant="standard" type="text" required  name="Province" onChange={handleChanged} value={transaction.Province}/>
                <TextField helperText="Region" variant="standard" type="text" required  name="Region" onChange={handleChanged} value={transaction.Region}/>
                <TextField helperText="PostalCode" variant="standard" type="text" required  name="PostalCode" onChange={handleChanged} value={transaction.PostalCode}/>
                <TextField helperText="Description Of Visit" variant="standard" type="text" required  name="DescriptionOfVisit" onChange={handleChanged} value={transaction.DescriptionOfVisit}/>
                <TextField helperText="PatientID" variant="standard" type="text" required  name="PatientID" onChange={handleChanged} value={transaction.PatientID}/>
                <TextField helperText="DoctorID" variant="standard" type="text" required  name="DoctorID" onChange={handleChanged} value={transaction.DoctorID}/>
        </Stack>
          </Stack>
          <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{px:5, pb:10, pt:5}}>
          <Button type="submit" value="Update" variant="outlined" size="large">Update</Button>
          </Stack>
</Stack>

      </Box>

    </>
  );
};

export default TransactionEdit;