import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack, TextField } from "@mui/material"


const PatientEdit = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState({
password: " "
  });
  const navigate = useNavigate();


  useEffect(() => {
    let url = `http://127.0.0.1:5000/api/patients/${id}`;

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
      .then((json) => setPatient(json));

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleChanged = (e) => {
    setPatient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:5000/api/patients/`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PatientID: patient.PatientID,
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

        id: id
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => navigate(`/patients/${id}`))
      .catch((error) => console.log(error));
  };

  return (
    <>

      <Typography variant="h4" sx={{px:5, py:5}} align="center" color={"green"}>Edit Patient {patient.PatientID}</Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ px:10, py:10}}>
<Stack direction={"column"} spacing={8} align="center">
          <Stack>
            <Stack direction={"column"} spacing={4} justifyContent={"center"} >
            <TextField helperText="UserName" variant="standard" type="text" required  name="UserName" onChange={handleChanged} value={patient.UserName}/>
            <TextField helperText="Password" variant="standard" type="text" required  name="Password" onChange={handleChanged} value={patient.Password}/>
            <TextField helperText="Email" variant="standard" type="email" required  name="email" onChange={handleChanged} value={patient.email}/>
            <TextField helperText="Last Name" variant="standard" type="text" required  name="lastname" onChange={handleChanged} value={patient.lastname}/>
            <TextField helperText="First Name" variant="standard" type="text" required  name="firstName" onChange={handleChanged} value={patient.firstName}/>
            <TextField helperText="middleName" variant="standard" type="text" required  name="middleName" onChange={handleChanged} value={patient.middleName}/>
            <TextField helperText="prefix" variant="standard" type="text" required  name="prefix" onChange={handleChanged} value={patient.prefix}/>
            <TextField helperText="gender" variant="standard" type="text" required  name="gender" onChange={handleChanged} value={patient.gender}/>
            <TextField helperText="birthday" variant="standard" type="date" required  name="birthday" onChange={handleChanged} value={patient.birthday}/>
            <TextField helperText="contactNumber" variant="standard" type="text" required  name="contactNumber" onChange={handleChanged} value={patient.contactNumber}/>
            <TextField helperText="MaritalStatus" variant="standard" type="text" required  name="MaritalStatus" onChange={handleChanged} value={patient.MaritalStatus}/>
            <TextField helperText="Place of Birth" variant="standard" type="text" required  name="Birthplace" onChange={handleChanged} value={patient.Birthplace}/>
            <TextField helperText="Emergency Contact" variant="standard" type="text" required  name="EmergencyContact" onChange={handleChanged} value={patient.EmergencyContact}/>
            <TextField helperText="Address" variant="standard" type="text" required  name="Address" onChange={handleChanged} value={patient.Address}/>
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

export default PatientEdit;