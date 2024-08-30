// src/app/events/edit/[id]/page.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EventForm from '../../../../components/EventForm/EventForm';
import { getEventById, updateEvent } from '../../../../api/events';
import { Container, CircularProgress } from '@mui/material';

const EditEventPage: React.FC = () => {
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

  const handleSubmit = async (data: any) => {
    if (id) {
      await updateEvent(+id, data);
    }

    router.push('/events');
  };

  return (
    <Container>
      {event ? <EventForm onSubmit={handleSubmit} initialData={event} /> : <CircularProgress />}
    </Container>
  );
};

export default EditEventPage;
