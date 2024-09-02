"use client";

import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../../api/events';
import { Container, Box } from '@mui/material';
import { EventFilter } from '../../components/EventFilter/EventFilter';
import { MapView } from '@/components/MapView/MapView';
import { EventData } from '@/types/EventData';

const EventListPage: React.FC = () => {
  const [eventDatas, setEventDatas] = useState<EventData[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getAllEvents();
      setEventDatas(data);
    };
    fetchEvents();

  }, []);

  return (
    <Container>
      <Box mb={2}>
        <EventFilter eventDatas={eventDatas} />
      </Box>

      <Box>
        <MapView eventDatas={eventDatas} />
      </Box>
    </Container>
  );
};

export default EventListPage;
