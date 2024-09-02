import React, { useState, useEffect } from 'react';
import { TextField, FormControl, InputLabel, NativeSelect } from '@mui/material';
import { EventList } from '../EventList/EventList';
import { EventData } from '@/types/EventData';
import styles from './EventFilter.module.css';

interface EventFilterProps {
  eventDatas: EventData[];
}

export const EventFilter: React.FC<EventFilterProps> = ({ eventDatas }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('all');
  const [filteredEvents, setFilteredEvents] = useState<EventData[]>(eventDatas);

  useEffect(() => {
    const filtered = eventDatas.filter((eventData) => {
      const matchesTitle = eventData.name.toLowerCase().includes(title.toLowerCase());
      const matchesCategory = category === 'all' || eventData.category.toLowerCase() === category.toLowerCase();

      return matchesTitle && matchesCategory;
    });

    setFilteredEvents(filtered);
  }, [title, category, eventDatas]);

  return (
    <div className={styles.container}>
      <TextField
        label="Search"
        variant="outlined"
        className={styles.textField}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <FormControl fullWidth margin="normal" className={styles.formControl}>
        <InputLabel htmlFor="category-select">Category</InputLabel>
        <NativeSelect
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value as string)}
          className={styles.nativeSelect}
        >
          <option value="all">All</option>
          <option value="chess">Chess</option>
          <option value="concert">Concert</option>
          <option value="dancing">Dancing</option>
          <option value="gallery">Gallery</option>
          <option value="conference">Conference</option>
        </NativeSelect>
      </FormControl>

      <EventList eventDatas={filteredEvents} />
    </div>
  );
};
