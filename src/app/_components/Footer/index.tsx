"use client";
import * as React from "react";
import { Container, Grid2 as Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      color="inherit"
      sx={{
        top: "auto",
        bottom: 0,
        height: "15%",
        bgcolor: "primary.main",
        color: "white",
        p: 2
      }}
      maxWidth={false}>
      <Grid container spacing={2} justifyContent="space-between" m={3}>
        <Grid size={4} className="footer-left">
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6">Email: info@cb-mixing.com</Typography>
          <Typography variant="h6">Phone: +44 (0)1706 638 301</Typography>
          <Typography variant="h6">Fax: +44 (0)1706 526 569</Typography>
        </Grid>

        <Grid size={2} id="footer-right">
          <Grid id="footer-address">
            <Typography variant="h5" gutterBottom>
              Address
            </Typography>
            <Typography variant="h6">CARTER</Typography>
            <Typography variant="h6">Unit 30 Stakehill Ind Est.,</Typography>
            <Typography variant="h6">Finlan Rd, Middleton,</Typography>
            <Typography variant="h6">Manchester, England</Typography>
            <Typography variant="h6">M24 2RW</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
