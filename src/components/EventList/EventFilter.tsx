import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const EventFilter: React.FC = () => {
  return (
    <FormControl fullWidth margin="normal">
      <TextField label="Search" variant="outlined" />

      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>

        <Select>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="concert">Concert</MenuItem>
          <MenuItem value="conference">Conference</MenuItem>
        </Select>
      </FormControl>
    </FormControl>
  );
};

export default EventFilter;
