import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { getCoordinates } from '../../services/geocodingService';
import { EventMarkerWithPopup } from './MapMarker/MapMarker';
import { EventData } from '../../types/EventData';
import { EventLocation } from '@/types/EventLocation';
import mapOptions from '../../components/MapView/MapStyles';
import { useGoogleMapsScript } from '@/hooks/useGoogleMapsScript';

interface MapViewProps {
  eventDatas: EventData[];
}

export const MapView: React.FC<MapViewProps> = ({ eventDatas }) => {
  const [eventLocations, setEventLocations] = useState<EventLocation[]>([]);
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { loaded, error } = useGoogleMapsScript(googleMapsApiKey);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const locations = await Promise.all(
          eventDatas.map(async (eventData) => {
            try {
              const coordinates = await getCoordinates(eventData.location);

              if (coordinates && coordinates.lat && coordinates.lng) {
                return {
                  id: eventData.id,
                  title: eventData.name,
                  location: {
                    lat: coordinates.lat,
                    lng: coordinates.lng,
                  },
                  details: eventData.description,
                };
              }
              return null;
            } catch (error) {
              console.error(`Failed to fetch coordinates for location "${eventData.location}":`, error);
              return null;
            }
          })
        );

        setEventLocations(locations.filter(Boolean) as EventLocation[]);
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates();
  }, [eventDatas]);

  if (!googleMapsApiKey) {
    return <div>Error: Google Maps API Key is missing.</div>;
  }

  if (!loaded) {
    return <div>Loading Map...</div>;
  }

  if (error) {
    return <div>Error loading Google Maps.</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapOptions.containerStyle}
      center={mapOptions.center}
      zoom={mapOptions.zoom}
      options={mapOptions}
    >
      {eventLocations.map((event) => (
        <EventMarkerWithPopup key={event.id} event={event} />
      ))}
    </GoogleMap>
  );
};
