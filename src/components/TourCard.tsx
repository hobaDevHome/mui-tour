import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { AccessTime } from '@mui/icons-material';
import { im1, im2, im3, im4, im5, im6, im7, im8 } from '../images';

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src={im1} alt="test" className="img" />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse into falls
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={3}>
            <Rating
              name="read-only"
              value={3.5}
              readOnly
              precision={0.5}
              size="small"
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              3.5
            </Typography>
            <Typography variant="body2" component="p" marginLeft={1.5}>
              (123 reviews)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={3}>
            <Typography variant="h6" component="h3" marginTop={0}>
              From C $142
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
