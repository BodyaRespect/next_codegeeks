import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material';
import { EventData } from '../../types/Event';
import { getSimilarEvents } from '../../api/events';

interface SimilarEventsProps {
  currentEventId: number;
}

const SimilarEvents: React.FC<SimilarEventsProps> = ({ currentEventId }) => {
  const [similarEvents, setSimilarEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSimilarEvents = async () => {
      "use server";

      try {
        const events = await getSimilarEvents(currentEventId);
        setSimilarEvents(events);
      } catch (err) {
        setError('Failed to fetch similar events');
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarEvents();
  }, [currentEventId]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Similar Events
      </Typography>
      <Grid container spacing={2}>
        {similarEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
                <Typography color="textSecondary">{event.date}</Typography>
                <Typography>{event.location}</Typography>
                <Typography>{event.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SimilarEvents;
