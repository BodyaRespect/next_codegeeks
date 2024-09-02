import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { format } from 'date-fns';
import styles from './EventDetails.module.css';
import { EventData } from '@/types/EventData';

interface EventDetailsProps {
  event: EventData;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  const formattedDate = format(new Date(event.date), 'MMMM dd, yyyy, hh:mm a');
  const formattedPrice = event.price ? `$${event.price.toFixed(2)}` : 'Free';

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h4" component="div" className={styles.title}>
          {event.name}
        </Typography>

        <Typography color="text.secondary" className={styles.date}>
          {formattedDate}
        </Typography>

        <Typography color="text.secondary" className={styles.location}>
          {event.location}
        </Typography>

        <Typography color="text.secondary" className={styles.category}>
          {event.category}
        </Typography>

        <Typography variant="body1" className={styles.description}>
          {event.description}
        </Typography>

        <Typography color="text.secondary" className={styles.price}>
          {`Price: ${formattedPrice}`}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href={`/events/edit/${event.id}`}
          className={styles.editButton}
        >
          Edit Event
        </Button>
      </CardContent>
    </Card>
  );
};
