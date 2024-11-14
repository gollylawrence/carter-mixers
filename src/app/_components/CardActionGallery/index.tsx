import React from "react";
import {
  Container,
  Grid2 as Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box
} from "@mui/material";

export interface CardActionGalleryItem {
  src: string;
  alt: string;
  title: string;
  description?: string;
  link: string;
}
interface CardGalleryProps {
  items: CardActionGalleryItem[];
  columns?: number;
}

const CardActionGallery = ({ items, columns = 3 }: CardGalleryProps) => (
  <Container sx={{ justifyContent: "center", display: "flex" }}>
    <Grid container spacing={3} sx={{ mt: 2 }} columns={columns} justifyContent="space-between">
      {items.map(({ src, title, alt, link }, index) => (
        <Grid size={1} key={index}>
          <Card
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              bgcolor: "white",
              aspectRatio: "1 / 1"
            }}>
            <CardActionArea
              href={link}
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                alignContent: "center",
                justifyItems: "center",
                justifyContent: "center"
              }}>
              <CardMedia
                component="img"
                image={src}
                alt={alt}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  color: "white",
                  // backgroundColor: "white",
                  padding: "16px",
                  // width: "80%",
                  justifyItems: "center",
                  justifyContent: "center"
                }}>
                <Typography variant="h1" color="secondary.main" fontWeight={900}>
                  {title}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default CardActionGallery;
