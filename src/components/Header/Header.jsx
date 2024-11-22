import React from 'react';
import { Box, Typography } from '@mui/material';
import Pizza from '../../assets/pizza_main.jpeg';

const headerStyles = {
  container: {
    width: '100%',
    height: '230px',
    backgroundImage: `url(${Pizza})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  glassOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(4px)',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    color: 'black',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#242725',
    fontSize: '37px',
  },
  subtitle: {
    fontSize: '11px',
    marginTop: '0.5rem',
  },
};

function Header() {
  return (
    <Box sx={headerStyles.container}>
      <Box sx={headerStyles.glassOverlay} />
      <Box sx={headerStyles.content}>
        <Typography variant="h3" component="h1" sx={headerStyles.title}>
          Optimize Your Meal
        </Typography>
        <Typography variant="h5" component="p" sx={headerStyles.subtitle}>
          Select a meal to add to your week. You can edit, modify, and manage meal plans seamlessly.
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
