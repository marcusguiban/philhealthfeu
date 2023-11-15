import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack, Container, TextField } from "@mui/material"

const PatientCreate = () => {
  const [patient, setPatient] = useState({
  });

  const navigate = useNavigate();

  const handleChanged = (e) => {
    setPatient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();
    let url = `http://127.0.0.1:5000/api/patients`;

    const requestOptions = {
      signal: controller.signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({
        
        UserName: patient.UserName,
        Password: patient.Password,
        email: patient.email,
        lastname: patient.lastname,
        firstName: patient.firstName,
        middleName: patient.middleName,
        prefix: patient.prefix,
        gender: patient.gender,
        birthday: patient.birthday,
        contactNumber: patient.contactNumber,
        MaritalStatus: patient.MaritalStatus,
        Birthplace: patient.Birthplace,
        EmergencyContact: patient.EmergencyContact,
        Address: patient.Address,

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

      <Typography variant="h4" sx={{px:5, py:5}} align="center" >Patient Register Form</Typography>
        <Container xs={{pt:10, py:10}}>

        <Box component="form" onSubmit={handleSubmit} >


          <Stack direction={"column"} spacing={8} align="center" sx={{pt:10}}>
              <Stack>
                <Stack direction={"column"} spacing={4} justifyContent={"center"} >

                <TextField helperText="User Name" variant="standard" type="text" required  name="UserName" onChange={handleChanged} value={patient.UserName}/>
                <TextField helperText="Email" variant="standard" type="email" name="email" onChange={handleChanged} value={patient.email}/>
                <TextField helperText="Password" variant="standard" type="Password" name="Password" onChange={handleChanged} value={patient.Password}/>
                <TextField helperText="Last Name" variant="standard" type="text" name="lastname" onChange={handleChanged} value={patient.lastname}/>
                <TextField helperText="First Name" variant="standard" type="text" name="firstName" onChange={handleChanged} value={patient.firstName}/>
                <TextField helperText="Middle Name" variant="standard" type="text" name="middleName" onChange={handleChanged} value={patient.middleName}/>
                <TextField helperText="Prefix" variant="standard" type="text" name="prefix" onChange={handleChanged} value={patient.prefix}/>
                <TextField helperText="Gender" variant="standard" type="text" name="gender" onChange={handleChanged} value={patient.gender}/>
                <TextField helperText="Birthday" variant="standard" type="text" name="birthday" onChange={handleChanged} value={patient.birthday}/>
                <TextField helperText="Contact Number" variant="standard" type="number" required  name="contactNumber" onChange={handleChanged} value={patient.contactNumber}/>
                </Stack>
              </Stack>
              <Stack>
                <Stack direction={"column"} spacing={4} justifyContent={"center"} >
                <TextField helperText="Marital Status" variant="standard" type="text" required  name="MaritalStatus" onChange={handleChanged} value={patient.MaritalStatus}/>
                <TextField helperText="Place of Birth" variant="standard" type="text" required  name="Birthplace" onChange={handleChanged} value={patient.Birthplace}/>
                <TextField helperText="Emergency Contact" variant="standard" type="text " required  name="EmergencyContact" onChange={handleChanged} value={patient.EmergencyContact}/>
                <TextField helperText="Address" variant="standard" type="text " required  name="Address" onChange={handleChanged} value={patient.Address}/>

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