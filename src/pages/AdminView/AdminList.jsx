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


const AdminList = () => {
  const [admins, setAdmin] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    let url = "http://localhost:5000/api/admin";

    const requestOptions = {
      signal: controller.signal,
      method: "GET"

    };

    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        
        setAdmin(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>

    <Container sx={{py:10}}>
    <Typography variant="h4" align="center" color={"green"}> Admin List </Typography>

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
            <TableCell >Business Email</TableCell>
            <TableCell >Contact Number</TableCell>
            <TableCell >Occuption</TableCell>
            <TableCell >Sector</TableCell>
            <TableCell >Officeaddress</TableCell>
            <TableCell >Barangay</TableCell>
            <TableCell >City</TableCell>
            <TableCell >Province</TableCell>
            <TableCell >Region</TableCell>
            <TableCell >Postalcode</TableCell>
            <TableCell >View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins.map((admin) => (
            <TableRow
            key={admin.id} 
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{admin.AdminID}</TableCell>
              <TableCell >{admin.lastname}, {admin.firstName} {admin.middleName}. </TableCell>
              <TableCell >{admin.Businessemail}</TableCell>
              <TableCell >{admin.ContactNumber}</TableCell>
              <TableCell >{admin.Occuption}</TableCell>
              <TableCell >{admin.Sector}</TableCell>
              <TableCell >{admin.Officeaddress}</TableCell>
              <TableCell >{admin.Barangay}</TableCell>
              <TableCell >{admin.City}</TableCell>
              <TableCell >{admin.Province}</TableCell>
              <TableCell >{admin.Region}</TableCell>
              <TableCell >{admin.Postalcode}</TableCell>
              <TableCell >
                <Link to={`/admin/${admin._id}`} style={{ color: 'green'}}><VisibilityIcon /></Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{mx:5, my:5}}>
      <Link to="/Admin-registration-form">
    <Button  variant="outlined" color="success">Register new Admin</Button>

      </Link>
            </Stack>
    
        </Container>
      )}
    </Container>

    </>
  );
};

export default AdminList;