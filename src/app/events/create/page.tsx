// src/app/events/create/page.tsx
import React from 'react';
import { useRouter } from 'next/router';
import EventForm from '../../../components/EventForm/EventForm';
import { createEvent } from '../../../api/events';
import { Container } from '@mui/material';

const CreateEventPage: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      await createEvent(data);
      router.push('/events');
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <Container>
      <EventForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default CreateEventPage;
