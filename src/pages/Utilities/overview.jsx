import React from "react";
import DoctorList from "../DoctorsView/DoctorsLists";
import PatientList from "../PatientView/PatientList";
import AdminList from "../AdminView/AdminList";
import { Box, Button, ButtonGroup } from "@mui/material";
import TransactionList from "../Transactions/transactionList";



const Overview = () => {


  return (
    <> 
    <Box display="flex" justifyContent="center">
    <h1>Overview</h1>
    </Box>


 
              <Box display="flex" justifyContent="center" >
            <ButtonGroup variant="contained" color="success" disableRipple justifyContent={"center"}>
              <Button href="/Doctors-registration-form">Doctor Registration Form</Button>
              <Button href="/Patients-registration-form">Patients Registration Form</Button>
              <Button href="/Admin-registration-form">Admin Registration Form</Button>
              <Button href="/Transaction-form">Transaction Form</Button>


            </ButtonGroup>
          </Box>
<DoctorList />
<PatientList />
<AdminList />
<TransactionList />
    </>
  );
};

export default Overview;