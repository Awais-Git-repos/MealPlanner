import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';

const chipStyle = {
    width:'80px',
    height:'15px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'0.2rem'
}

function Chip({style,data}) {
  return (
    <Box sx={{...chipStyle,...style}}>
         <Typography variant='h5' component="p" sx={{fontSize:'10px'}}>{data[0]}</Typography>
    </Box>
  )
}

export default Chip