import React from "react";
import PageTemplate from "./_components/PageTemplate";
import MixersDisplay from "./_components/MixersDisplay";
import { Container, Typography } from "@mui/material";
import LandingMenu from "./_components/LandingMenu";

export const Home = () => {
  return (
    <div>
      <main>
        <PageTemplate title="Carter Mixers">
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              p: 4
            }}>
            <section id="landing-menu">
              <LandingMenu />
            </section>
            <section id="about-us">
              <Container sx={{ display: "flex", flexDirection: "column", gap: 4, p: 4 }}>
                <Typography variant="h1">About Us</Typography>
                <p>
                  Carter of Rochdale is the name that embodies the ultimate quality in rubber and
                  plastics engineering throughout the world. An acute understanding of customer
                  requirements and the ever changing trends of market forces have established Carter
                  at the forefront of the industry. A sensible business philosophy committed to long
                  term research and development, together with enormous investment in both people
                  and the most technically advanced machinery ensures a continuing policy of service
                  and quality assurance that customers can really depend on. Situated in the heart
                  of the North West of England (just off the M62 motorway) you can easily visit
                  Carter by air, road or rail through an accessible network of travel links.
                </p>
              </Container>
            </section>
            <section id="mixers">
              <Container sx={{ display: "flex", flexDirection: "column", gap: 4, p: 4 }}>
                <Typography variant="h1">View our Mixers</Typography>
                <MixersDisplay />
              </Container>
            </section>
          </Container>
        </PageTemplate>
      </main>
    </div>
  );
};

export default Home;
