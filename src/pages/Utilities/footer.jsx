
import { Container, Stack, Typography } from "@mui/material";

import {  React} from "react";

export const Footer = () => {


  return (
    <>
    <Stack bgcolor={"green"}>

   
    <Container className="footer">
        <Typography variant="subtitle1" color={"white"} justifyContent={"center"}>
        © 2023 cloned by Marcus Gabrielle G. Guiban | FEU ALABANG
        </Typography>
    
    </Container>
    </Stack>
    </>
  );
};