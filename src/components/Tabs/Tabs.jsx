import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Typography, Container, Grid } from '@mui/material';
import BasicCard from '../Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { addToWeek, removeFromWeek } from "../../store/slices/mealSlice";
import useMeals from "../../hooks/useMeal";
import AlertDialog from '../Popup/Popup';

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const { meals, loading, error } = useMeals();
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState('');
  const { weeks } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  const handleMealSelect = (mealId) => {
    setSelectedMeals((prev) =>
      prev.includes(mealId) ? prev.filter((id) => id !== mealId) : [...prev, mealId]
    );
  };

  useEffect(() => {
    console.log("--Selected Meals--", selectedMeals);
    console.log("--Selected Week--", selectedWeek);
  }, [selectedMeals, selectedWeek]);

  const handleWeekChange = (event) => setSelectedWeek(event);
  const handleAddToWeek = () => {
    if (selectedMeals.length && selectedWeek) {
      dispatch(addToWeek({ week: selectedWeek, meals: selectedMeals }));
      setSelectedMeals([]);
      setSelectedWeek('');
    } else {
      alert('Please select meals and a week.');
    }
  };

  const handleRemoveFromWeek = (mealId, week) => {
    dispatch(removeFromWeek({ week, mealId }));
  };

  const handleChange = (event, newValue) => setValue(newValue);

  const tabStyles = {
    marginRight: '3.8rem',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: 'black',
    '&:hover': { color: '#003e73' },
    '&.Mui-selected': { color: '#003e73' },
  };

  const containerStyles = {
    width: '75%',
    paddingTop: '1.6rem',
    paddingBottom: '1.4rem',
  };

  const renderMealsForWeek = (week) => (
    <Grid container spacing={2}>
      {meals
        .filter((meal) => weeks[week].includes(meal.id))
        .map((meal) => (
          <Grid item xs={12} sm={4} md={4} key={meal?.id}>
            <BasicCard
              name={meal?.name}
              instruction={meal?.instructions}
              cuisine={meal?.cuisine}
              image={meal?.image}
              rating={meal?.rating}
              reviewCount={meal?.reviewCount}
              mealType={meal?.mealType}
              weeks="active"
              onAdd={() => handleMealSelect(meal.id)}
              onRemove={() => handleRemoveFromWeek(meal.id, week)}
            />
          </Grid>
        ))}
    </Grid>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Container sx={containerStyles}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#242725', fontSize: '20px' }}>
          Week Orders
        </Typography>
      </Container>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', position: 'sticky' }}>
        <Container sx={{ width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Tabs value={value} onChange={handleChange} aria-label="Week Orders Tabs" sx={{ flexGrow: 1, paddingTop: '1.5rem', paddingBottom: '1rem' }}>
            {['All Meals', 'Week 1', 'Week 2', 'Week 3', 'Week 4'].map((label, index) => (
              <Tab label={label} key={index} {...a11yProps(index)} sx={tabStyles} />
            ))}
          </Tabs>
          <AlertDialog handleWeekChange={handleWeekChange} handleAddToWeek={handleAddToWeek} />
        </Container>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Container sx={{ width: '75%' }}>
          <Grid container spacing={2}>
            {meals.map((meal) => (
              <Grid item xs={12} sm={4} md={4} key={meal?.id}>
                <BasicCard
                  id={meal?.id}
                  name={meal?.name}
                  instruction={meal?.instructions}
                  cuisine={meal?.cuisine}
                  image={meal?.image}
                  rating={meal?.rating}
                  reviewCount={meal?.reviewCount}
                  selectedMeals={selectedMeals}
                  mealType={meal?.mealType}
                  onAdd={() => handleMealSelect(meal.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </CustomTabPanel>

      {['week1', 'week2', 'week3', 'week4'].map((week, index) => (
        <CustomTabPanel value={value} index={index + 1} key={week}>
          <Container sx={{ width: '75%' }}>
            {renderMealsForWeek(week)}
          </Container>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
