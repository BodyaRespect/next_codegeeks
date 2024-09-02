import React, { useState } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { EventLocation } from '@/types/EventLocation';

interface EventMarkerWithPopupProps {
  event: EventLocation;
}

export const EventMarkerWithPopup: React.FC<EventMarkerWithPopupProps> = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Marker
        position={event.location}
        onClick={handleToggleOpen}
        icon={{
          url: '/map-marker.svg',
          scaledSize: new window.google.maps.Size(42, 42),
        }}
      />
      {isOpen && (
        <InfoWindow position={event.location} onCloseClick={handleToggleOpen}>
          <div style={{
            color: 'black',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#fff',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
            maxWidth: '200px'
          }}>
            <h3 style={{ margin: '0 0 8px', fontSize: '16px' }}>{event.title}</h3>
            <p style={{ margin: '0', fontSize: '14px' }}>{event.details}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};
