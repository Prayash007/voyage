import React from 'react';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import type { TravelPackage } from '../../types';

interface PackageCardProps {
  package: TravelPackage;
  onBook: (pkg: TravelPackage) => void;
}

export default function PackageCard({ package: travelPackage, onBook }: PackageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={travelPackage.imageUrl}
          alt={travelPackage.destination}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="h-4 w-4 text-gray-400" />
          <h3 className="font-medium text-gray-900">{travelPackage.destination}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">{travelPackage.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{travelPackage.duration} days</span>
          </div>
          <div className="flex items-center text-sm font-medium text-gray-900">
            <DollarSign className="h-4 w-4" />
            <span>{travelPackage.price}</span>
          </div>
        </div>
        <button
          onClick={() => onBook(travelPackage)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}