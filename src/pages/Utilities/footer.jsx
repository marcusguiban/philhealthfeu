
import { Container, Stack, Typography } from "@mui/material";

import {  React} from "react";

export const Footer = () => {


  return (
    <>
    <Stack bgcolor={"green"}>

   
    <Container className="footer" justifyContent={"center"}>
        <Typography variant="subtitle1" color={"white"} >
        © 2023 cloned by Marcus Gabrielle G. Guiban | FEU ALABANG
        </Typography>
    
    </Container>
    </Stack>
    </>
  );
};