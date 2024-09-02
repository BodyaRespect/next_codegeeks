import axios from 'axios';

export async function getCoordinates(address: string): Promise<{ lat: number, lng: number } | null> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error('Google Maps API key is missing.');

    return null;
  }

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.status === 'OK') {
      const location = data.results[0].geometry.location;

      console.log(location);

      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      console.error('Geocoding API error:', data.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);

    return null;
  }
}
