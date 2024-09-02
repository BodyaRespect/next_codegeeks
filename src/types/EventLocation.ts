export interface EventLocation {
  id: number;
  title: string;
  location: {
    lat: number;
    lng: number;
  };
  details: string;
}
