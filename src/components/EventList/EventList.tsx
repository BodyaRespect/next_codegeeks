import React, { useEffect, useState, useCallback } from 'react';
import { EventItem } from './EventItem/EventItem';
import { EventData } from '../../types/EventData';
import { Container, Grid2 } from '@mui/material';
import styles from './EventList.module.css';
import { deleteEvent } from '@/api/events';

interface EventListProps {
  eventDatas: EventData[];
}

export const EventList: React.FC<EventListProps> = ({ eventDatas }) => {
  const [currentData, setCurrentData] = useState<EventData[]>([]);

  useEffect(() => {
    setCurrentData(eventDatas);
  }, [eventDatas]);

  const handleDelete = useCallback(async (id: number) => {
    try {
      await deleteEvent(id);
      setCurrentData(prevEventDatas => prevEventDatas.filter(event => event.id !== id));
    } catch (error) {
      console.error('Failed to delete event:', error);
    }
  }, []);

  return (
    <Container maxWidth="lg" className={styles.eventlist}>
      <Grid2 container spacing={3}>
        {currentData.map(eventData => (
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }} key={eventData.id}>
            <EventItem eventData={eventData} onDelete={handleDelete} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};
