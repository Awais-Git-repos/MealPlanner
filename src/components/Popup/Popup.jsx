import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Box } from '@mui/material';

export default function AlertDialog({ handleWeekChange, handleAddToWeek }) {
  const [open, setOpen] = useState(false);
  const [activeWeek, setActiveWeek] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonStyles = {
    backgroundColor: '#003e73',
    fontSize: '11px',
    width: '150px',
    padding: '0.5rem',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: 'white',
    '&:hover': { backgroundColor: '#002a50' },
  };

  const weeks = ["week1", "week2", "week3", "week4"];

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} sx={buttonStyles}>
        Add to Week
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title">
        <Box sx={{ height: '250px', padding: '1rem' }}>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#242725', fontSize: '22px', mt: '0.5rem' }}>
              Select Week
            </Typography>
          </DialogTitle>
          <DialogContent sx={{ display: 'flex', gap: '0.8rem', mt: '1.5rem' }}>
            {weeks.map((week) => (
              <Box
                key={week}
                sx={{
                  width: '90px',
                  backgroundColor: activeWeek === week ? '#cfebff' : 'transparent',
                  borderRadius: '0.5rem',
                  padding: '0.5rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  handleWeekChange(week);
                  setActiveWeek(week);
                }}
              >
                <Typography variant="h5" sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                  {week.replace('week', 'Week ')}
                </Typography>
              </Box>
            ))}
          </DialogContent>
          <DialogActions sx={{ display: 'flex', justifyContent: 'center', mt: '0.8rem' }}>
            <Button
              sx={{
                ...buttonStyles,
              }}
              onClick={() => {
                handleAddToWeek();
                handleClose();
              }}
              autoFocus
            >
              Save
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}
