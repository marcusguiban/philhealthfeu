import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack, Container, TextField } from "@mui/material"

const HospitalCreate = () => {
  const [hospital, setHospital] = useState({
  });

  const navigate = useNavigate();

  const handleChanged = (e) => {
    setHospital((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();
    let url = `http://127.0.0.1:5000/api/hospital`;

    const requestOptions = {
      signal: controller.signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({
        
        UserName: hospital.UserName,
        Password: hospital.Password,
        BusinessEmail: hospital.BusinessEmail,
        HospitalName: hospital.HospitalName,
        EmployerName: hospital.EmployerName,
        Sector: hospital.Sector,
        Landline: hospital.Landline,
        LicenseNumber: hospital.LicenseNumber,
        HospitalAddress: hospital.HospitalAddress,
        Region: hospital.Region,
        Province: hospital.Province,
        City: hospital.City,
        Barangay: hospital.Barangay,
        PostalCode: hospital.PostalCode,

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

      <Typography variant="h4" sx={{px:5, py:5}} align="center" >Hospital Register Form</Typography>
        <Container xs={{pt:10, py:10}}>

        <Box component="form" onSubmit={handleSubmit} >


          <Stack direction={"column"} spacing={8} align="center" sx={{pt:10}}>
              <Stack>
                <Stack direction={"column"} spacing={4} justifyContent={"center"} >

                <TextField helperText="UserName" variant="standard" type="text" required  name="UserName" onChange={handleChanged} value={hospital.UserName}/>
                <TextField helperText="BusinessEmail" variant="standard" type="BusinessEmail" name="businessEmail" onChange={handleChanged} value={hospital.businessEmail}/>
                <TextField helperText="Password" variant="standard" type="Password" name="Password" onChange={handleChanged} value={hospital.Password}/>
                <TextField helperText="HospitalName" variant="standard" type="text" name="hospitalName" onChange={handleChanged} value={hospital.hospitalName}/>
                <TextField helperText="EmployerName" variant="standard" type="text" name="employerName" onChange={handleChanged} value={hospital.employerName}/>
                <TextField helperText="Sector" variant="standard" type="text" name="sector" onChange={handleChanged} value={hospital.sector}/>
                <TextField helperText="Landline" variant="standard" type="text" name="landline" onChange={handleChanged} value={hospital.landline}/>
                <TextField helperText="LicenseNumber" variant="standard" type="text" name="licenseNumber" onChange={handleChanged} value={hospital.licenseNumber}/>
                <TextField helperText="HospitalAddress" variant="standard" type="text" name="hospitalAddress" onChange={handleChanged} value={hospital.hospitalAddress}/>
                <TextField helperText="Region" variant="standard" type="number" required  name="region" onChange={handleChanged} value={hospital.region}/>
                </Stack>
              </Stack>
              <Stack>
                <Stack direction={"column"} spacing={4} justifyContent={"center"} >
                <TextField helperText="Province" variant="standard" type="text" required  name="province" onChange={handleChanged} value={hospital.province}/>
                <TextField helperText="City" variant="standard" type="text" required  name="city" onChange={handleChanged} value={hospital.city}/>
                <TextField helperText="Barangay" variant="standard" type="text " required  name="barangay" onChange={handleChanged} value={hospital.barangay}/>
                <TextField helperText="PostalCode" variant="standard" type="text " required  name="postalCode" onChange={handleChanged} value={hospital.postalCode}/>

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

export default HospitalCreate;