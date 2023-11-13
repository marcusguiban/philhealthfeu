import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack, TextField } from "@mui/material"


const DoctorEdit = () => {
  const { id } = useParams();
  const [doctors, setdoctors] = useState({
password: " "
  });
  const navigate = useNavigate();


  useEffect(() => {
    let url = `http://127.0.0.1:5000/api/Doctors/${id}`;

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
      .then((json) => setdoctors(json));

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleChanged = (e) => {
    setdoctors((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:5000/api/doctors/`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DoctorID: doctors.DoctorID,
        UserName: doctors.UserName,
        Password: doctors.Password,
        email: doctors.email,
        lastname: doctors.lastname,
        firstName: doctors.firstName,
        middleName: doctors.middleName,
        prefix: doctors.prefix,
        gender: doctors.gender,
        birthday: doctors.birthday,
        contactNumber: doctors.contactNumber,
        MaritalStatus: doctors.MaritalStatus,
        LicenseNumber: doctors.LicenseNumber,
        Specialization: doctors.Specialization,
        Address: doctors.Address,

        id: id
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => navigate(`/doctors/${id}`))
      .catch((error) => console.log(error));
  };

  return (
    <>

      <Typography variant="h4" sx={{px:5, py:5}} align="center" color={"palevioletred"}>Edit Doctor {doctors.DoctorID}</Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ px:10, py:10}}>
<Stack direction={"column"} spacing={8} align="center">
          <Stack>
            <Stack direction={"column"} spacing={4} justifyContent={"center"} >
            <TextField helperText="UserName" variant="standard" type="text" required  name="UserName" onChange={handleChanged} value={doctors.UserName}/>
            <TextField helperText="Password" variant="standard" type="text" required  name="Password" onChange={handleChanged} value={doctors.Password}/>
            <TextField helperText="Email" variant="standard" type="email" required  name="email" onChange={handleChanged} value={doctors.email}/>
            <TextField helperText="Last Name" variant="standard" type="text" required  name="lastname" onChange={handleChanged} value={doctors.lastname}/>
            <TextField helperText="First Name" variant="standard" type="text" required  name="firstName" onChange={handleChanged} value={doctors.firstName}/>
            <TextField helperText="middleName" variant="standard" type="text" required  name="middleName" onChange={handleChanged} value={doctors.middleName}/>
            <TextField helperText="prefix" variant="standard" type="text" required  name="prefix" onChange={handleChanged} value={doctors.prefix}/>
            <TextField helperText="gender" variant="standard" type="text" required  name="gender" onChange={handleChanged} value={doctors.gender}/>
            <TextField helperText="birthday" variant="standard" type="date" required  name="birthday" onChange={handleChanged} value={doctors.birthday}/>
            <TextField helperText="contactNumber" variant="standard" type="text" required  name="contactNumber" onChange={handleChanged} value={doctors.contactNumber}/>
            <TextField helperText="MaritalStatus" variant="standard" type="text" required  name="MaritalStatus" onChange={handleChanged} value={doctors.MaritalStatus}/>
            <TextField helperText="LicenseNumber" variant="standard" type="text" required  name="LicenseNumber" onChange={handleChanged} value={doctors.LicenseNumber}/>
            <TextField helperText="Specialization" variant="standard" type="text" required  name="Specialization" onChange={handleChanged} value={doctors.Specialization}/>
            <TextField helperText="Address" variant="standard" type="text" required  name="Address" onChange={handleChanged} value={doctors.Address}/>
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

export default DoctorEdit;