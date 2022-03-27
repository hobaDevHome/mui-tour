import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        // {
        //   props: {
        //     variant: "body3",
        //   },
        //   style: {
        //     fontSize: 9,
        //   },
        // },
      ],
    },
  },
});

interface Tour {
  id: number;
  name: string;
  duration: number;
  rating: number;
  numberOfReviews: number;
  price: number;
  image: string;
}

// const TodoItem: React.FC<{
//   task: ITask;
//   onComplete: (text: string) => void;
// }> = (props) => {

const TourCard: React.FC<{ tour: Tour }> = (props) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={props.tour.image} alt='tours' className='img' />
          <Box paddingX={1}>
            <Typography variant='subtitle1' component='h2'>
              {props.tour.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                {props.tour.duration} hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating
                name='read-only'
                value={props.tour.rating}
                readOnly
                precision={0.5}
                size='small'
              />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                {props.tour.rating}
              </Typography>
              <Typography variant='body2' component='p' marginLeft={1.5}>
                ({props.tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Typography variant='h6' component='h3' marginTop={0}>
                From C ${props.tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
