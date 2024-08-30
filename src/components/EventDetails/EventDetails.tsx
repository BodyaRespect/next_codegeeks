import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { EventData } from '../../types/Event';

interface EventDetailsProps {
  event: EventData;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="div">
          {event.title}
        </Typography>
        <Typography color="text.secondary">
          {event.date}
        </Typography>
        <Typography color="text.secondary">
          {event.location}
        </Typography>
        <Typography variant="body1" paragraph>
          {event.description}
        </Typography>
        <Button variant="contained" color="primary" href={`/events/edit/${event.id}`}>
          Edit Event
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventDetails;
