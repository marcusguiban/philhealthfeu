import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Typography, Box, Button, Stack, Container } from "@mui/material"



const AppointmentDetails = () => {
  const { id } = useParams();
  const [appointments, setAppointments] = useState({});

  const [loading, setLoading] = useState(false);
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

    setLoading(true);

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setAppointments(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleDelete = (e) => {
    if (window.confirm("Are you really sure you want to delete this record?")) {
      let url = `http://127.0.0.1:5000/api/appointment`;

      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id
        }), 
      };

      fetch(url, requestOptions)
        .then(() => {
          navigate("/appointment");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>


    <Box sx={{px:5, py:5}}>
    <Typography variant="h4" sx={{mx:5, my:5}} align="center" color={"green"}>Appointment Details</Typography>

{loading ? (
     <Typography variant="h4" sx={{mx:5, my:5}} align="center">Loading...</Typography>
) : (
  <>

<Container >
    <Stack direction={"row"} justifyContent={"center"}>
    <Stack direction={"column"}>

    <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >ID: </Typography>
        </Stack>
        <Stack px={10}  >
        <Typography variant="h6" >{appointments.AppointmentID}</Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Time: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{appointments.Time}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Date: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{appointments.Date}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Sector: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{appointments.Sector}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Patient Name: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{appointments.PatientName}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Hospital: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{appointments.Hospital}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Address:  </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{appointments.Address}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Doctor's Diagnosis: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{appointments.DoctorsDiagnosis}</Typography>
        </Stack>
      </Stack>
    </Stack>
    </Stack>
        <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{px:5, pb:10, pt:5}}>
          <Link to="/appointment">
          <Button variant="contained" color="success" sx={{ color: "White" }} >Patient List</Button>
          </Link>
          <Link to={`/appointment/edit/${appointments._id}`}>
          <Button variant="contained" color="success" sx={{ color: "White" }} >Edit</Button>
          </Link>
          <Button variant="contained" color="success" sx={{ color: "White" }} onClick={handleDelete}>Delete</Button>
          <Link to="/appointment-form">
          <Button variant="contained" color="success" sx={{ color: "White" }} > Add </Button>
          </Link>
        </Stack>
        </Container>
  </>
)}

    </Box>

    </>

  );
};

export default AppointmentDetails;