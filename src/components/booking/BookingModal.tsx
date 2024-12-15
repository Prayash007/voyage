import React, { useState } from 'react';
import { X, Calendar, Users, DollarSign } from 'lucide-react';
import type { TravelPackage } from '../../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  package: TravelPackage;
  onSubmit: (data: BookingFormData) => void;
}

export interface BookingFormData {
  packageId: string;
  travelers: number;
  departureDate: string;
  contactName: string;
  contactEmail: string;
  specialRequests?: string;
}

export default function BookingModal({ isOpen, onClose, package: travelPackage, onSubmit }: BookingModalProps) {
  const [formData, setFormData] = useState<Partial<BookingFormData>>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      packageId: travelPackage.id,
      travelers: Number(formData.travelers) || 1,
      departureDate: formData.departureDate || '',
      contactName: formData.contactName || '',
      contactEmail: formData.contactEmail || '',
      specialRequests: formData.specialRequests,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Book {travelPackage.destination}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Package Details</h4>
          <p className="text-sm text-gray-600">{travelPackage.description}</p>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>${travelPackage.price} per person</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Travelers
              </label>
              <div className="mt-1 relative">
                <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  required
                  value={formData.travelers || ''}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Departure Date
              </label>
              <div className="mt-1 relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  required
                  value={formData.departureDate || ''}
                  onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                  className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Name</label>
            <input
              type="text"
              required
              value={formData.contactName || ''}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Email</label>
            <input
              type="email"
              required
              value={formData.contactEmail || ''}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Special Requests</label>
            <textarea
              rows={3}
              value={formData.specialRequests || ''}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}