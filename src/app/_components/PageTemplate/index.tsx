import { Container, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type PageTemplateProps = {
  title: string;
  children?: ReactNode;
};

const PageTemplate = ({ title, children }: PageTemplateProps) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        p: 6,
        gap: 6,
        textAlign: "center",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: "#f4f6f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "primary.dark"
      }}>
      <Typography variant="h1">{title}</Typography>
      <Container className="page-content" sx={{ minHeight: "50vh" }}>
        {children}
      </Container>
    </Container>
  );
};

export default PageTemplate;
