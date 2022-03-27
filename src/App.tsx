import React from "react";

import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TourCard from "./components/TourCard";
import Appbar from "./components/Appbar";
import cities from "./data.json";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className='App'>
      <Appbar />
      <Container sx={{ marginTop: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant='h4'
              component='h2'
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default App;
