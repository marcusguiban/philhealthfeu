import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack, TextField } from "@mui/material"


const AdminEdit = () => {
  const { id } = useParams();
  const [admins, setAdmins] = useState({
password: " "
  });
  const navigate = useNavigate();


  useEffect(() => {
    let url = `http://127.0.0.1:5000/api/admin/${id}`;

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
      .then((json) => setAdmins(json));

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleChanged = (e) => {
    setAdmins((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:5000/api/admin/`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        UserName: admins.UserName,
        Password: admins.Password,
        lastname: admins.lastname,
        firstName: admins.firstName,
        middleName: admins.middleName,
        prefix: admins.prefix,
        Businessemail: admins.Businessemail,
        ContactNumber: admins.ContactNumber,
        Occuption: admins.Occuption,
        Sector: admins.Sector,
        Officeaddress: admins.Officeaddress,
        Barangay: admins.Barangay,
        City: admins.City,
        Province: admins.Province,
        Region: admins.Region,
        Postalcode: admins.Postalcode,
        id: id
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => navigate(`/admin/${id}`))
      .catch((error) => console.log(error));
  };

  return (
    <>

      <Typography variant="h4" sx={{px:5, py:5}} align="center" color={"palevioletred"}>Edit Admin {admins.AdminID}</Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ px:10, py:10}}>
<Stack direction={"column"} spacing={8} align="center">
          <Stack>
            <Stack direction={"column"} spacing={4} justifyContent={"center"} >
            <TextField helperText="UserName" variant="standard" type="text" required  name="UserName" onChange={handleChanged} value={admins.UserName}/>
            <TextField helperText="Password" variant="standard" type="text" required  name="Password" onChange={handleChanged} value={admins.Password}/>
            <TextField helperText="Email" variant="standard" type="email" required  name="email" onChange={handleChanged} value={admins.Businessemail}/>
            <TextField helperText="Last Name" variant="standard" type="text" required  name="lastname" onChange={handleChanged} value={admins.lastname}/>
            <TextField helperText="First Name" variant="standard" type="text" required  name="firstName" onChange={handleChanged} value={admins.firstName}/>
            <TextField helperText="Middle Name" variant="standard" type="text" required  name="middleName" onChange={handleChanged} value={admins.middleName}/>
            <TextField helperText="prefix" variant="standard" type="text" required  name="prefix" onChange={handleChanged} value={admins.prefix}/>
            <TextField helperText="ContactNumber" variant="standard" type="text" required  name="ContactNumber" onChange={handleChanged} value={admins.ContactNumber}/>
            <TextField helperText="Occuption" variant="standard" type="text" required  name="Occuption" onChange={handleChanged} value={admins.Occuption}/>
            <TextField helperText="Sector" variant="standard" type="text" required  name="Sector" onChange={handleChanged} value={admins.Sector}/>
            <TextField helperText="Office Address" variant="standard" type="text" required  name="Officeaddress" onChange={handleChanged} value={admins.Officeaddress}/>
            <TextField helperText="Barangay" variant="standard" type="text" required  name="Barangay" onChange={handleChanged} value={admins.Barangay}/>
            <TextField helperText="City" variant="standard" type="text" required  name="City" onChange={handleChanged} value={admins.City}/>
            <TextField helperText="Province" variant="standard" type="text" required  name="Province" onChange={handleChanged} value={admins.Province}/>
            <TextField helperText="Region" variant="standard" type="text" required  name="Region" onChange={handleChanged} value={admins.Region}/>
            <TextField helperText="Postal Code" variant="standard" type="text" required  name="Postalcode" onChange={handleChanged} value={admins.Postalcode}/>
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

export default AdminEdit;