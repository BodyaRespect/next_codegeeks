import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { EventData } from '../../../types/EventData';
import styles from './EventItem.module.css';

interface EventItemProps {
  eventData: EventData;
  onDelete: (id: number) => void;
}

export const EventItem: React.FC<EventItemProps> = ({ eventData, onDelete }) => {
  const handleDelete = () => {
    onDelete(eventData.id);
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h5" component="div" className={styles.typographyTitle}>
          {eventData.name}
        </Typography>

        <Typography color="text.secondary" className={styles.typographyLocation}>
          {eventData.location}
        </Typography>

        <Typography variant="body2" className={styles.typographyDescription}>
          {eventData.description}
        </Typography>

        <div className={styles.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            href={`/events/${eventData.id}`}
          >
            View Details
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={styles.button}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
