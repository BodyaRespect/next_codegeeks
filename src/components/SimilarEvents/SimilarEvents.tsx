import React from 'react';
import { Card, CardContent, Typography, Grid, Grid2 } from '@mui/material';
import { EventData } from '../../types/EventData';
import { format } from 'date-fns';

interface SimilarEventsProps {
  similarEvents: EventData[];
}

export const SimilarEvents: React.FC<SimilarEventsProps> = ({ similarEvents }) => {
  return (
    <div style={{ paddingTop: '20px' }}>
      <Typography variant="h5" gutterBottom color="black">
        {!!similarEvents.length ? 'Similar Events:' : 'No similar events found.'}
      </Typography>

      <Grid2 container spacing={3}>
        {similarEvents.map((eventData) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={eventData.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {eventData.name}
                </Typography>

                <Typography color="text.secondary">
                  {format(new Date(eventData.date), 'MMMM dd, yyyy, hh:mm a')}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {eventData.location}
                </Typography>

                <Typography variant="body2">
                  {eventData.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};
