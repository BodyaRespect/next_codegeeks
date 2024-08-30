// src/components/EventList/EventItem.tsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { EventData } from '../../types/Event';

interface EventItemProps {
  event: EventData;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography color="text.secondary">
          {event.date}
        </Typography>
        <Typography color="text.secondary">
          {event.location}
        </Typography>
        <Typography variant="body2">
          {event.description}
        </Typography>
        <Button variant="contained" color="primary" href={`/events/${event.id}`}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventItem;
