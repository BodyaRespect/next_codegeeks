const mapOptions = {
  styles: [
    {
      featureType: 'all',
      elementType: 'geometry',
      stylers: [
        { color: '#f5f5f5' }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        { color: '#000000' }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        { color: '#ffffff' },
        { weight: 1.5 }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [
        { color: '#0f0f0f' }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        { color: '#e0e0e0' }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        { color: '#cfcfcf' }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { color: '#ffffff' }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        { color: '#f5f5f5' }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        { color: '#f5f5f5' }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        { color: '#34abeb' }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        { color: '#dcdcdc' }
      ]
    }
  ],

  containerStyle: {
    width: '100%',
    height: '700px',
    marginBottom: '36px',
  },
  
  center: { 
    lat: 49.8419, 
    lng: 24.0315 
  },
  
  zoom: 12,
};

export default mapOptions;