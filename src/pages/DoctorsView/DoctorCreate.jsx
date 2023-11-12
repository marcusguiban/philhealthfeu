import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack, Container, TextField } from "@mui/material"

const DoctorCreate = () => {
  const [doctor, setDoctor] = useState({
  });

  const navigate = useNavigate();

  const handleChanged = (e) => {
    setDoctor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();
    let url = `http://127.0.0.1:5000/api/doctors`;

    const requestOptions = {
      signal: controller.signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({
        
        UserName: doctor.UserName,
        Password: doctor.Password,
        email: doctor.email,
        lastname: doctor.lastname,
        firstName: doctor.firstName,
        middleName: doctor.middleName,
        prefix: doctor.prefix,
        gender: doctor.gender,
        birthday: doctor.birthday,
        contactNumber: doctor.contactNumber,
        MaritalStatus: doctor.MaritalStatus,
        LicenseNumber: doctor.LicenseNumber,
        Specialization: doctor.Specialization,
        Address: doctor.Address,

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

      <Typography variant="h4" sx={{px:5, py:5}} align="center" >Doctor Register Form</Typography>
        <Container xs={{pt:10, py:10}}>

        <Box component="form" onSubmit={handleSubmit} >


          <Stack direction={"column"} spacing={8} align="center" sx={{pt:10}}>
              <Stack>
                <Stack direction={"column"} spacing={4} justifyContent={"center"} >

                <TextField helperText="User Name" variant="standard" type="text" required  name="UserName" onChange={handleChanged} value={doctor.UserName}/>
                <TextField helperText="Email" variant="standard" type="email" name="email" onChange={handleChanged} value={doctor.email}/>
                <TextField helperText="Password" variant="standard" type="Password" name="Password" onChange={handleChanged} value={doctor.Password}/>
                <TextField helperText="Last Name" variant="standard" type="text" name="lastname" onChange={handleChanged} value={doctor.lastname}/>
                <TextField helperText="First Name" variant="standard" type="text" name="firstName" onChange={handleChanged} value={doctor.firstName}/>
                <TextField helperText="Middle Name" variant="standard" type="text" name="middleName" onChange={handleChanged} value={doctor.middleName}/>
                <TextField helperText="Prefix" variant="standard" type="text" name="prefix" onChange={handleChanged} value={doctor.prefix}/>
                <TextField helperText="Gender" variant="standard" type="text" name="gender" onChange={handleChanged} value={doctor.gender}/>
                <TextField helperText="Birthday" variant="standard" type="text" name="birthday" onChange={handleChanged} value={doctor.birthday}/>
                <TextField helperText="Contact Number" variant="standard" type="number" required  name="contactNumber" onChange={handleChanged} value={doctor.contactNumber}/>
                </Stack>
              </Stack>
              <Stack>
                <Stack direction={"column"} spacing={4} justifyContent={"center"} >
                <TextField helperText="Marital Status" variant="standard" type="text" required  name="MaritalStatus" onChange={handleChanged} value={doctor.MaritalStatus}/>
                <TextField helperText="License Number" variant="standard" type="number" required  name="LicenseNumber" onChange={handleChanged} value={doctor.LicenseNumber}/>
                <TextField helperText="Specialization" variant="standard" type="text " required  name="Specialization" onChange={handleChanged} value={doctor.Specialization}/>
                <TextField helperText="Address" variant="standard" type="text " required  name="Address" onChange={handleChanged} value={doctor.Address}/>

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

export default DoctorCreate;