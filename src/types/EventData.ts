export interface EventData {
  id: number;
  name: string;
  date: string;
  location: string;
  category: string;
  description: string;
  price: number;
  similar: EventData[];
}