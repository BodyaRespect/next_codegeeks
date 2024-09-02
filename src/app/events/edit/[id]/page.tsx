"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { EventForm } from '../../../../components/EventForm/EventForm';
import { getEventById, updateEvent } from '../../../../api/events';
import { Container, CircularProgress } from '@mui/material';

const EditEventPage: React.FC = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const handleSubmit = async (data: any) => {
    if (id) {
      await updateEvent(+id, data);
    }
  };

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        const data = await getEventById(+id);
        setEvent(data);
      };
      fetchEvent();
    }
  }, [id]);

  return (
    <Container>
      {event ? <EventForm onSubmit={handleSubmit} initialData={event} /> : <CircularProgress />}
    </Container>
  );
};

export default EditEventPage;
