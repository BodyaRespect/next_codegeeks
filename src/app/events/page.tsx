// src/app/events/page.tsx

import React, { useEffect, useState } from 'react';
import EventList from '../../components/EventList/EventList';
import EventFilter from '../../components/EventList/EventFilter';
import EventSort from '../../components/EventList/EventSort';
import { getAllEvents } from '../../api/events';
import { Container, Box } from '@mui/material';

const EventListPage: React.FC = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      "use server";

      const data = await getAllEvents();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <Container>
      <Box mb={2}>
        <EventFilter />
        <EventSort />
      </Box>
      <EventList events={events} />
    </Container>
  );
};

export default EventListPage;
