
import {  Box, Button, ButtonGroup, Container, Stack } from "@mui/material";
import {  React} from "react";
import philhealthlogo from "../../images/philhealthlogo.png"

export const Navbar = () => {


  return (
    <>
    <Stack className="nav" >
      <Container sx={{px: 2 ,py: 2}}>
        <Stack justifyContent={"center"} alignContent={"center"}>
          <Stack flexDirection={"row"} spacing={4} sx={{px: 2 ,py: 2}} justifyContent={"center"} alignItems={"center"}>
              <img src={philhealthlogo} alt="philhealthlogo" width={295} height={108}></img>
              <Stack  sx={{px: 2 ,py: 2}}>
                <Button href="/Login" color="success" variant="contained" disableRipple>Login</Button>
                <ButtonGroup variant="text" color="success" disableRipple>
                  <Button href="/">Home</Button>
                  <Button href="#">Contact  Us</Button>
                  <Button href="#">sitemap</Button>
                  <Button href="#">disclamer</Button>
                  <Button href="#">Privacy notice</Button>
                </ButtonGroup>
              </Stack>
          </Stack>
          <Box display="flex" justifyContent="center" >
            <ButtonGroup variant="contained" color="success" disableRipple justifyContent={"center"}>
              <Button href="#">About Us</Button>
              <Button href="#">Members</Button>
              <Button href="#">Our Partners</Button>
              <Button href="#">Online Services</Button>
              <Button href="#">Downloads</Button>

            </ButtonGroup>
          </Box>
          <Box display="flex" justifyContent="center" >
            <ButtonGroup variant="contained" color="success" disableRipple justifyContent={"center"}>
              <Button href="/Doctors-registration-form">Doctor Registration Form</Button>
              <Button href="/Doctors">Doctors</Button>
              <Button href="/Patients">Patients</Button>
              <Button href="/Admin">Admin</Button>
              <Button href="#">Downloads</Button>


            </ButtonGroup>
          </Box>
        </Stack>
      </Container>
    </Stack>
    </>
  );
};