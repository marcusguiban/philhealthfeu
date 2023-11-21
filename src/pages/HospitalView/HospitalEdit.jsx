import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack, TextField } from "@mui/material"


const HospitalEdit = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState({
password: " "
  });
  const navigate = useNavigate();


  useEffect(() => {
    let url = `http://127.0.0.1:5000/api/hospital/${id}`;

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
      .then((json) => setHospital(json));

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleChanged = (e) => {
    setHospital((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:5000/api/hospital/`;

    const requestOptions = {
      method: "PUT",
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

        id: id
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => navigate(`/hospital/${id}`))
      .catch((error) => console.log(error));
  };

  return (
    <>

      <Typography variant="h4" sx={{px:5, py:5}} align="center" color={"green"}>Edit Hospital {hospital.HospitalID}</Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ px:10, py:10}}>
<Stack direction={"column"} spacing={8} align="center">
          <Stack>
            <Stack direction={"column"} spacing={4} justifyContent={"center"} >
            <TextField helperText="UserName" variant="standard" type="text" required  name="UserName" onChange={handleChanged} value={hospital.UserName}/>
            <TextField helperText="Password" variant="standard" type="text" required  name="Password" onChange={handleChanged} value={hospital.Password}/>
            <TextField helperText="BusinessEmail" variant="standard" type="email" required  name="businessEmail" onChange={handleChanged} value={hospital.businessEmail}/>
            <TextField helperText="HospitalName" variant="standard" type="text" required  name="hospitalName" onChange={handleChanged} value={hospital.hospitalName}/>
            <TextField helperText="EmployerName" variant="standard" type="text" required  name="employerName" onChange={handleChanged} value={hospital.employerName}/>
            <TextField helperText="Sector" variant="standard" type="text" required  name="sector" onChange={handleChanged} value={hospital.sector}/>
            <TextField helperText="Landline" variant="standard" type="text" required  name="landline" onChange={handleChanged} value={hospital.landline}/>
            <TextField helperText="LicenseNumber" variant="standard" type="text" required  name="licenseNumber" onChange={handleChanged} value={hospital.licenseNumber}/>
            <TextField helperText="HospitalAddress" variant="standard" type="date" required  name="hospitalAddress" onChange={handleChanged} value={hospital.hospitalAddress}/>
            <TextField helperText="Region" variant="standard" type="text" required  name="region" onChange={handleChanged} value={hospital.region}/>
            <TextField helperText="Province" variant="standard" type="text" required  name="province" onChange={handleChanged} value={hospital.province}/>
            <TextField helperText="City" variant="standard" type="text" required  name="city" onChange={handleChanged} value={hospital.city}/>
            <TextField helperText="Barangay" variant="standard" type="text" required  name="barangay" onChange={handleChanged} value={hospital.barangay}/>
            <TextField helperText="PostalCode" variant="standard" type="text" required  name="postalCode" onChange={handleChanged} value={hospital.postalCode}/>
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

export default HospitalEdit;