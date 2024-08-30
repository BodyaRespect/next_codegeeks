import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const EventSort: React.FC = () => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>Sort By</InputLabel>

      <Select>
        <MenuItem value="date">Date</MenuItem>
        <MenuItem value="location">Location</MenuItem>
      </Select>
    </FormControl>
  );
};

export default EventSort;
