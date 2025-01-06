export interface TimeZone {
  name: string;
  offset: number; // Offset in hours from UTC
}
export const TIME_ZONES: TimeZone[] = [
  { name: 'UTC', offset: 0 },
  { name: 'New York', offset: -5 },
  { name: 'Los Angeles', offset: -8 },
  { name: 'London', offset: 0 },
  { name: 'Paris', offset: 1 },
  { name: 'Berlin', offset: 1 },
  { name: 'Tokyo', offset: 9 },
  { name: 'Sydney', offset: 10 },
  { name: 'Moscow', offset: 3 },
  { name: 'Dubai', offset: 4 },
  { name: 'Rio de Janeiro', offset: -3 },
  { name: 'Buenos Aires', offset: -3 },
  { name: 'Johannesburg', offset: 2 },
  { name: 'Delhi', offset: 5.5 },
  { name: 'Singapore', offset: 8 },
  { name: 'Shanghai', offset: 8 },
  { name: 'Mexico City', offset: -6 },
  { name: 'Sao Paulo', offset: -3 },
  { name: 'Cairo', offset: 2 },
  { name: 'Istanbul', offset: 3 },
  { name: 'Tehran', offset: 3.5 }, // Iran (IRST)
];
