import React from "react";
import { Container, Grid2 as Grid, Card, CardMedia, Typography } from "@mui/material";

export interface CardGalleryItem {
  src: string;
  alt: string;
  title: string;
  description?: string;
}
interface CardGalleryProps {
  items: CardGalleryItem[];
  columns?: number;
}

const CardActionGallery = ({ items, columns = 3 }: CardGalleryProps) => (
  <Container sx={{ justifyContent: "center", display: "flex" }}>
    <Grid container spacing={4} sx={{ mt: 2 }} columns={columns} justifyContent="space-between">
      {items.map(({ src, title, alt }, index) => (
        <Grid size={1} key={index}>
          <Card
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              bgcolor: "white"
            }}>
            <CardMedia component="img" image={src} alt={alt} />
            <Typography variant="h2" color="primary.main">
              {title}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default CardActionGallery;
