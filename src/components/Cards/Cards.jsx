import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import BasicRating from '../Rating/Rating';
import Chip from '../Chip/Chip';

export default function BasicCard({
  id,
  name,
  instruction,
  cuisine,
  image,
  rating,
  reviewCount,
  onAdd,
  mealType,
  weeks,
  selectedMeals,
  onRemove,
}) {
  const cardStyles = {
    width: '280px',
    minHeight: '300px',
    position: 'relative',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    border: `2px solid ${id && selectedMeals.includes(id) ? '#003e73' : 'transparent'}`,
  };

  const chipStyles = {
    backgroundColor: 'black',
    color: 'white',
    position: 'absolute',
    right: '10%',
    top: '6%',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '10px',
    fontWeight: 'bold',
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    objectFit: 'cover',
  };

  const textTitleStyles = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '0.5rem',
    lineHeight: '1.4',
  };

  const descriptionStyles = {
    color: 'text.secondary',
    marginTop: '0.8rem',
    fontSize: '11px',
    lineHeight: '1.5',
  };

  const cuisineLabelStyles = {
    fontSize: '11px',
    fontWeight: 'bold',
    marginRight: '4px',
  };

  const cuisineTextStyles = {
    fontSize: '11px',
  };

  const contentFooterStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
  };

  return (
    <Card
      key={id}
      sx={cardStyles}
      onClick={() => {
        if (!weeks) onAdd();
      }}
    >
      <Chip style={chipStyles} label="Popular" data={mealType} />

      {weeks && (
        <DeleteForeverOutlinedIcon
          sx={{
            position: 'absolute',
            top: '5%',
            left: '8%',
            backgroundColor: '#ffdfe0',
            color: '#bf5567',
            cursor: 'pointer',
          }}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        />
      )}

      <CardContent>
        <Box sx={{ width: '100%', height: '160px', overflow: 'hidden' }}>
          <img src={image} alt={name} style={imageStyles} />
        </Box>

        <Typography variant="h5" component="div" sx={textTitleStyles}>
          {name}
        </Typography>

        <Typography sx={descriptionStyles}>{instruction}</Typography>
      </CardContent>

      <CardContent sx={contentFooterStyles}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" component="p" sx={cuisineLabelStyles}>
            Cuisine:
          </Typography>
          <Typography variant="body2" component="p" sx={cuisineTextStyles}>
            {cuisine}
          </Typography>
        </Box>

        <BasicRating rating={rating} reviewCount={reviewCount} />
      </CardContent>
    </Card>
  );
}
