import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Typography, Box, Button, Stack, Container } from "@mui/material"



const TransactionDetails = () => {
  const { id } = useParams();
  const [tansaction, setTansaction] = useState({});

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let url = `http://127.0.0.1:5000/api/transaction/${id}`;

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
        setTansaction(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleDelete = (e) => {
    if (window.confirm("Are you really sure you want to delete this record?")) {
      let url = `http://127.0.0.1:5000/api/transaction`;

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
          navigate("/transaction");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>


    <Box sx={{px:5, py:5}}>
    <Typography variant="h4" sx={{mx:5, my:5}} align="center" color={"green"}>Transaction Details</Typography>

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
        <Typography variant="h6" >{tansaction.TransactionID}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Date: </Typography>
        </Stack>
        <Stack px={10}  >
        <Typography variant="h6" >{tansaction.Date}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Address: </Typography>
        </Stack>
        <Stack px={10}  >
        <Typography variant="h6" >{tansaction.Address}, {tansaction.Barangay} {tansaction.Province} {tansaction.Region} {tansaction.PostalCode} </Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >PatientID: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{tansaction.PatientID}</Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >DoctorID: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{tansaction.DoctorID}</Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Description Of Visit: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{tansaction.DescriptionOfVisit}</Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Mode Of Payment: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{tansaction.ModeOfPayment}</Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Received By: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{tansaction.ReceivedBy}</Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Paid By: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{tansaction.PaidBy}</Typography>
        </Stack>
      </Stack>


      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Amount: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >Php {tansaction.Amount}</Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >OR number: </Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{tansaction.ORnumber}</Typography>
        </Stack>
      </Stack>

    </Stack>
    </Stack>
        <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{px:5, pb:10, pt:5}}>
          <Link to="/transaction">
          <Button variant="contained" color="success" sx={{ color: "White" }} >Patient List</Button>
          </Link>
          <Link to={`/transaction/edit/${tansaction._id}`}>
          <Button variant="contained" color="success" sx={{ color: "White" }} >Edit</Button>
          </Link>
          <Button variant="contained" color="success" sx={{ color: "White" }} onClick={handleDelete}>Delete</Button>
          <Link to="/transaction-form">
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

export default TransactionDetails;