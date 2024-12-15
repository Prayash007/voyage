import { useState } from 'react';
import type { TravelPackage, TravelBooking } from '../types';

const initialPackages: TravelPackage[] = [
  {
    id: '1',
    destination: 'Bali Paradise Retreat',
    description: 'Experience the magic of Bali with this all-inclusive luxury package featuring pristine beaches and cultural excursions.',
    price: 2499,
    duration: 7,
    highlights: ['Private villa', 'Cultural tours', 'Spa treatments'],
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
  },
  {
    id: '2',
    destination: 'Santorini Sunset Escape',
    description: 'Discover the romantic charm of Santorini with stunning caldera views and exclusive wine tastings.',
    price: 3299,
    duration: 6,
    highlights: ['Sunset cruise', 'Wine tasting', 'Private transfers'],
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-6e65c2d60404',
  },
  {
    id: '3',
    destination: 'Tulum Beach Adventure',
    description: 'Immerse yourself in the perfect blend of beach relaxation and Mayan culture exploration.',
    price: 1899,
    duration: 5,
    highlights: ['Beach yoga', 'Cenote tours', 'Mayan ruins'],
    imageUrl: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18',
  },
];

export function usePackages() {
  const [packages] = useState<TravelPackage[]>(initialPackages);
  const [bookings, setBookings] = useState<TravelBooking[]>([]);

  const createBooking = (formData: any) => {
    const newBooking: TravelBooking = {
      id: Date.now().toString(),
      destination: packages.find(p => p.id === formData.packageId)?.destination || '',
      startDate: formData.departureDate,
      endDate: '', // Calculate based on package duration
      price: packages.find(p => p.id === formData.packageId)?.price || 0,
      status: 'pending',
    };

    setBookings(prev => [...prev, newBooking]);
  };

  return {
    packages,
    bookings,
    createBooking,
  };
}