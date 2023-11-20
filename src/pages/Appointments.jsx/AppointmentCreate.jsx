import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack, Container, TextField } from "@mui/material"

const AppointmentCreate = () => {
  const [appointment, setAppointment] = useState({
  });

  const navigate = useNavigate();

  const handleChanged = (e) => {
    setAppointment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();
    let url = `http://127.0.0.1:5000/api/appointment`;

    const requestOptions = {
      signal: controller.signal,
      method: "POST",
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

      <Typography variant="h4" sx={{px:5, py:5}} align="center" >Transaction Form</Typography>
        <Container xs={{pt:10, py:10}}>

        <Box component="form" onSubmit={handleSubmit} >
          <Stack direction={"column"} spacing={8} align="center" sx={{pt:10}}>
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

export default AppointmentCreate;