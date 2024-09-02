"use server";

import axios from 'axios';
import { EventData } from '@/types/EventData';

const API_URL = 'http://localhost:3000/events';

export const getAllEvents = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

export const getEventById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);

  return response.data;
};

export const createEvent = async (eventData: EventData) => {
  const response = await axios.post(API_URL, eventData);

  return response.data;
};

export const updateEvent = async (id: number, eventData: EventData) => {
  const response = await axios.put(`${API_URL}/${id}`, eventData);

  return response.data;
};

export const deleteEvent = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);

  return response.data;
};
