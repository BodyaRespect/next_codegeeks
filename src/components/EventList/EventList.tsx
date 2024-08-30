import React from 'react';
import EventItem from './EventItem';
import { EventData } from '../../types/Event';
import { Container, Grid2 } from '@mui/material';

interface EventListProps {
  events: EventData[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={3}>
        {events.map(event => (
          <Grid2 size={{ xs: 12, sm: 6, md: 8 }} key={event.id}>
            <EventItem event={event} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default EventList;
