import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating({rating,reviewCount}) {

  return (
    <Box sx={{ '& > legend': { mt: 2 },display:'flex' }}>
      <Typography variant='h5' component="p" sx={{fontSize:'11px',fontWeight:'bold'}} >Rating:</Typography>
      <Typography variant='h5' component="p" sx={{fontSize:'11px',marginRight:'0.3rem'}}>{rating}</Typography>
      <Rating name="read-only" value={reviewCount} readOnly sx={{fontSize:'15.5px',color:'#034879'}}/>
    </Box>
  );
}
