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


const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    let url = "http://localhost:5000/api/Patients";

    const requestOptions = {
      signal: controller.signal,
      method: "GET"

    };

    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        
        setPatients(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>

    <Container sx={{py:10}}>
    <Typography variant="h4" align="center" color={"green"}> Current Patients </Typography>

      {loading ? (
        <Typography variant="h6" align="center" color={"palevioletred"}> Loading...</Typography>
      ) : (
        <Container sx={{py:10}}>

          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Contact Number</TableCell>
            <TableCell >Emergency Contact Number</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow
            key={patient.id} 
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{patient.PatientID}</TableCell>
              <TableCell >{patient.lastname}, {patient.firstName} {patient.middleName}. </TableCell>
              <TableCell >{patient.email}</TableCell>
              <TableCell >{patient.contactNumber}</TableCell>
              <TableCell >{patient.EmergencyContact}</TableCell>
              <TableCell >{patient.Address}</TableCell>
              <TableCell >
                <Link to={`/Patients/${patient._id}`} style={{ color: 'green'}}><VisibilityIcon /></Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{mx:5, my:5}}>
      <Link to="/Patients-registration-form">
    <Button  variant="outlined" color="success">Add New Patient</Button>

      </Link>
            </Stack>
    
        </Container>
      )}
    </Container>

    </>
  );
};

export default PatientList;