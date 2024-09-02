"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { EventDetails } from '../../../components/EventDetails/EventDetails';
import { SimilarEvents } from '../../../components/SimilarEvents/SimilarEvents';
import { getEventById } from '../../../api/events';
import { Container, CircularProgress, Typography } from '@mui/material';
import { EventData } from '../../../types/EventData';

const EventDetailsPage: React.FC = () => {
  const { id } = useParams();

  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventAndSimilarEvents = async () => {
      if (id) {
        try {
          const eventData = await getEventById(+id);
          setEvent(eventData);
        } catch (err) {
          setError('Failed to fetch event details or similar events');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchEventAndSimilarEvents();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container style={{ paddingBottom: '30px' }}>
      {event && <EventDetails event={event} />}
      {event && <SimilarEvents similarEvents={event.similar} />}
    </Container>
  );
};

export default EventDetailsPage;
