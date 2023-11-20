import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack, TextField } from "@mui/material"


const AppointmentEdit = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({
password: " "
  });
  const navigate = useNavigate();


  useEffect(() => {
    let url = `http://127.0.0.1:5000/api/appointment/${id}`;

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
      .then((json) => setAppointment(json));

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleChanged = (e) => {
    setAppointment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:5000/api/appointment/`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Time: appointment.Time,
        Date: appointment.Date,
        Sector: appointment.Sector,
        PatientName: appointment.PatientName,
        Hospital: appointment.Hospital,
        Address: appointment.Address,
        DoctorsDiagnosis: appointment.DoctorsDiagnosis,

        id: id
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => navigate(`/appointment/${id}`))
      .catch((error) => console.log(error));
  };

  return (
    <>

      <Typography variant="h4" sx={{px:5, py:5}} align="center" color={"green"}>Edit Patient {appointment.AppointmentID}</Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ px:10, py:10}}>
<Stack direction={"column"} spacing={8} align="center">
          <Stack>
            <Stack direction={"column"} spacing={4} justifyContent={"center"} >
            <TextField helperText="Time" variant="standard" type="text" name="Time" onChange={handleChanged} value={appointment.Time}/>
                <TextField helperText="Date" variant="standard" type="Date" name="Date" onChange={handleChanged} value={appointment.Date}/>
                <TextField helperText="Sector" variant="standard" type="text" name="Sector" onChange={handleChanged} value={appointment.Sector}/>
                <TextField helperText="Patient Name" variant="standard" type="text" name="PatientName" onChange={handleChanged} value={appointment.PatientName}/>
                <TextField helperText="Hospital" variant="standard" type="text" name="Hospital" onChange={handleChanged} value={appointment.Hospital}/>
                <TextField helperText="Address" variant="standard" type="text" name="Address" onChange={handleChanged} value={appointment.Address}/>
                <TextField helperText="DoctorsDiagnosis" variant="standard" type="text" name="DoctorsDiagnosis" onChange={handleChanged} value={appointment.DoctorsDiagnosis}/>
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

export default AppointmentEdit;