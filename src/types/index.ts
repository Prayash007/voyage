export interface TravelTrend {
  destination: string;
  popularity: number;
  seasonality: string;
  averagePrice: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  preferences: string[];
  pastBookings: TravelBooking[];
}

export interface TravelBooking {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  price: number;
  status: 'pending' | 'confirmed' | 'completed';
}

export interface TravelPackage {
  id: string;
  destination: string;
  description: string;
  price: number;
  duration: number;
  highlights: string[];
  imageUrl: string;
}