import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Typography, Box, Button, Stack, Container } from "@mui/material"



const DoctorsDetails = () => {
  const { id } = useParams();
  const [doctors, setdoctors] = useState({});

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let url = `http://127.0.0.1:5000/api/doctors/${id}`;

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
        setdoctors(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleDelete = (e) => {
    if (window.confirm("Are you really sure you want to delete this record?")) {
      let url = `http://127.0.0.1:5000/api/doctors`;

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
          navigate("/Doctors");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>


    <Box sx={{px:5, py:5}}>
    <Typography variant="h4" sx={{mx:5, my:5}} align="center" color={"green"}>Doctor Details</Typography>

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
        <Typography variant="h6" >{doctors.DoctorID}</Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Name: </Typography>
        </Stack>
        <Stack px={10}  >
        <Typography variant="h6" >{doctors.lastname}, {doctors.firstName} {doctors.middleName}. </Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Email: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{doctors.email}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Gender: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{doctors.gender}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Birthday: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{doctors.birthday}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Contact Number: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{doctors.contactNumber}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >License Number: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{doctors.LicenseNumber}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Specialization: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{doctors.Specialization}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Address: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{doctors.Address}</Typography>
        </Stack>
      </Stack>
    </Stack>
    </Stack>
        <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{px:5, pb:10, pt:5}}>
          <Link to="/Doctors">
          <Button variant="contained" color="success" sx={{ color: "White" }} >Dentist List</Button>
          </Link>
          <Link to={`/Doctors/edit/${doctors.DoctorID}`}>
          <Button variant="contained" color="success" sx={{ color: "White" }} >Edit</Button>
          </Link>
          <Button variant="contained" color="success" sx={{ color: "White" }} onClick={handleDelete}>Delete</Button>
          <Link to="/Doctors-registration-form">
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

export default DoctorsDetails;