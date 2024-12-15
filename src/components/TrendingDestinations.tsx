import React from 'react';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    name: 'Bali, Indonesia',
    trend: '+28%',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
  },
  {
    name: 'Santorini, Greece',
    trend: '+24%',
    image: 'https://images.unsplash.com/photo-1570077188670-6e65c2d60404',
  },
  {
    name: 'Tulum, Mexico',
    trend: '+18%',
    image: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18',
  },
];

export default function TrendingDestinations() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Trending Destinations</h2>
      <div className="space-y-4">
        {destinations.map((destination) => (
          <div key={destination.name} className="flex items-center space-x-4">
            <div className="relative h-16 w-16 rounded-lg overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <h3 className="font-medium text-gray-900">{destination.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mt-1">Booking trend: <span className="text-green-500">{destination.trend}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}