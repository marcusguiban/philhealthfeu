import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Typography, Box, Button, Stack, Container } from "@mui/material"



const AdminDetails = () => {
  const { id } = useParams();
  const [admin, setadmin] = useState({});

  const [loading, setLoading] = useState(false);
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

    setLoading(true);

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setadmin(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleDelete = (e) => {
    if (window.confirm("Are you really sure you want to delete this record?")) {
      let url = `http://127.0.0.1:5000/api/admin`;

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
          navigate("/Admin");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>


    <Box sx={{px:5, py:5}}>
    <Typography variant="h4" sx={{mx:5, my:5}} align="center" color={"green"}>Admin Details</Typography>

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
        <Typography variant="h6" >{admin.AdminID}</Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Name: </Typography>
        </Stack>
        <Stack px={10}  >
        <Typography variant="h6" >{admin.lastname}, {admin.firstName} {admin.middleName}. </Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Business Email: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{admin.Businessemail}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Contact Number: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{admin.ContactNumber}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Occuption: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{admin.Occuption}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Sector: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{admin.Sector}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Office Address: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{admin.Officeaddress}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Barangay: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{admin.Barangay}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Address: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{admin.City}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Province: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{admin.Province}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Region: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{admin.Region}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Postal Code: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{admin.Postalcode}</Typography>
        </Stack>
      </Stack>
    </Stack>
    </Stack>
        <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{px:5, pb:10, pt:5}}>
          <Link to="/Admin">
          <Button variant="contained" color="success" sx={{ color: "White" }} >Admin List</Button>
          </Link>
          <Link to={`/Admin/edit/${admin._id}`}>
          <Button variant="contained" color="success" sx={{ color: "White" }} >Edit</Button>
          </Link>
          <Button variant="contained" color="success" sx={{ color: "White" }} onClick={handleDelete}>Delete</Button>
          <Link to="/Admin-registration-form">
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

export default AdminDetails;