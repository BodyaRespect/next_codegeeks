// src/app/events/[id]/page.tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EventDetails from '../../../components/EventDetails/EventDetails';
import { getEventById } from '../../../api/events';
import { Container, CircularProgress } from '@mui/material';

const EventDetailsPage: React.FC = () => {
  const [event, setEvent] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        "use server";

        const data = await getEventById(+id);
        setEvent(data);
      };
      fetchEvent();
    }
  }, [id]);

  return (
    <Container>
      {event ? <EventDetails event={event} /> : <CircularProgress />}
    </Container>
  );
};

export default EventDetailsPage;
