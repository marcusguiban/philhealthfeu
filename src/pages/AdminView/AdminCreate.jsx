import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack, Container, TextField } from "@mui/material"

const AdminCreate = () => {
  const [admin, setPatient] = useState({
  });

  const navigate = useNavigate();

  const handleChanged = (e) => {
    setPatient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();
    let url = `http://127.0.0.1:5000/api/admin`;

    const requestOptions = {
      signal: controller.signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({
        
        UserName: admin.UserName,
        Password: admin.Password,
        lastname: admin.lastname,
        firstName: admin.firstName,
        middleName: admin.middleName,
        Businessemail: admin.Businessemail,
        prefix: admin.prefix,
        ContactNumber: admin.ContactNumber,
        Occuption: admin.Occuption,
        Sector: admin.Sector,
        Officeaddress: admin.Officeaddress,
        Barangay: admin.Barangay,
        City: admin.City,
        Province: admin.Province,
        Region: admin.Region,
        Postalcode: admin.Postalcode,

      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => {navigate('/');});

    return () => {
      controller.abort();
    };
  };

  return (
    <>

    <Container >

      <Typography variant="h4" sx={{px:5, py:5}} align="center" >Admin Register Form</Typography>
        <Container xs={{pt:10, py:10}}>

        <Box component="form" onSubmit={handleSubmit} >


          <Stack direction={"column"} spacing={8} align="center" sx={{pt:10}}>
              <Stack>
                <Stack direction={"column"} spacing={4} justifyContent={"center"} >

                <TextField helperText="User Name" variant="standard" type="text" required  name="UserName" onChange={handleChanged} value={admin.UserName}/>
                <TextField helperText="Password" variant="standard" type="Password" name="Password" onChange={handleChanged} value={admin.Password}/>
                <TextField helperText="Last Name" variant="standard" type="text" name="lastname" onChange={handleChanged} value={admin.lastname}/>
                <TextField helperText="First Name" variant="standard" type="text" name="firstName" onChange={handleChanged} value={admin.firstName}/>
                <TextField helperText="Middle Name" variant="standard" type="text" name="middleName" onChange={handleChanged} value={admin.middleName}/>
                <TextField helperText="Prefix" variant="standard" type="text" name="prefix" onChange={handleChanged} value={admin.prefix}/>
                <TextField helperText="Contact Number" variant="standard" type="text" name="ContactNumber" onChange={handleChanged} value={admin.ContactNumber}/>
                <TextField helperText="Occuption" variant="standard" type="text" name="Occuption" onChange={handleChanged} value={admin.Occuption}/>
                <TextField helperText="Sector" variant="standard" type="text" name="Sector" onChange={handleChanged} value={admin.Sector}/>
                <TextField helperText="Office Address" variant="standard" type="text" name="Officeaddress" onChange={handleChanged} value={admin.Officeaddress}/>
                <TextField helperText="Barangay" variant="standard" type="number" required  name="Barangay" onChange={handleChanged} value={admin.Barangay}/>
                <TextField helperText="City" variant="standard" type="text" name="City" onChange={handleChanged} value={admin.City}/>
                <TextField helperText="Province" variant="standard" type="text" name="Province" onChange={handleChanged} value={admin.Province}/>
                <TextField helperText="Region" variant="standard" type="text" name="Region" onChange={handleChanged} value={admin.Region}/>
                <TextField helperText="Postal Code" variant="standard" type="text" name="Postal Code" onChange={handleChanged} value={admin.Postalcode}/>
                </Stack>
              </Stack>
            
              <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{px:5, pt:5, pb:10}}>
              <Button type="submit" value="Save" variant="outlined">Save</Button>
              </Stack>
                </Stack>
        </Box>
      
      </Container>
      
    </Container>

    </>
  );
};

export default PatientCreate;