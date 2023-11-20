import React from "react";
import DoctorList from "../DoctorsView/DoctorsLists";
import PatientList from "../PatientView/PatientList";
import AdminList from "../AdminView/AdminList";
import { Box, Button, ButtonGroup } from "@mui/material";



const Overview = () => {


  return (
    <> 
    <Box display="flex" justifyContent="center">
    <h1>Overview</h1>
    </Box>


 
              <Box display="flex" justifyContent="center" >
            <ButtonGroup variant="contained" color="success" disableRipple justifyContent={"center"}>
              <Button href="/Doctors-registration-form">Doctor Registration Form</Button>
              <Button href="/Doctors">Doctors</Button>
              <Button href="/Patients">Patients</Button>
              <Button href="/Patients-registration-form">Patients Registration Form</Button>
              <Button href="/Admin">Admin</Button>
              <Button href="/Admin-registration-form">Admin Registration Form</Button>


            </ButtonGroup>
          </Box>
<DoctorList />
<PatientList />
<AdminList />

    </>
  );
};

export default Overview;