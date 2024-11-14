"use client";
import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Container,
  Grid2 as Grid
} from "@mui/material";
import { useRouter } from "next/navigation";
import ImageContainer from "../ImageContainer";

export interface CardData {
  src: string;
  tag: string;
  title: string;
  description: string;
  link: string;
  alt: string;
}

const cardData: CardData[] = [
  {
    src: "/images/home-new-mixers.png",
    tag: "new-mixers",
    title: "New Mixers",
    description: "See our new mixers.",
    link: "/new-mixers",
    alt: "New Mixers"
  },
  {
    src: "/images/home-rebuilt-mixers.png",
    tag: "rebuilt-mixers",
    title: "Rebuilt Mixers",
    description: "See our rebuilt mixers.",
    link: "/rebuilt-mixers",
    alt: "Rebuilt Mixers"
  }
];

const MixersDisplay = () => {
  const router = useRouter();

  return (
    <Container sx={{ justifyContent: "center", width: "100%" }}>
      <Grid container gap={10} height="100%">
        {cardData.map(({ src, tag, title, link, description, alt }) => (
          <Grid key={tag} size={5} height="100%">
            <Card sx={{ p: 2, bgcolor: "white", height: "100%" }} key={tag}>
              <CardActionArea onClick={() => router.push(link)}>
                <CardContent>
                  <Container sx={{ height: "300px" }}>
                    <ImageContainer src={src} alt={alt} />
                  </Container>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MixersDisplay;
