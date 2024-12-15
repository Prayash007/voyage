import React, { useState } from 'react';
import { usePackages } from '../../hooks/usePackages';
import PackageCard from './PackageCard';
import BookingModal from './BookingModal';
import type { TravelPackage } from '../../types';

export default function TravelPackages() {
  const { packages, createBooking } = usePackages();
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  const handleBook = (pkg: TravelPackage) => {
    setSelectedPackage(pkg);
  };

  const handleBookingSubmit = (formData: any) => {
    createBooking(formData);
    setSelectedPackage(null);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Available Travel Packages</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            package={pkg}
            onBook={handleBook}
          />
        ))}
      </div>

      {selectedPackage && (
        <BookingModal
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
          package={selectedPackage}
          onSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
}