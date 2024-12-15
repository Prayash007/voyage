import React from 'react';
import { Calendar, Clock, DollarSign } from 'lucide-react';

const bookings = [
  {
    id: 1,
    customer: 'Emma Thompson',
    destination: 'Paris, France',
    date: '2024-04-15',
    status: 'confirmed',
    amount: 2450,
  },
  {
    id: 2,
    customer: 'James Wilson',
    destination: 'Tokyo, Japan',
    date: '2024-05-01',
    status: 'pending',
    amount: 3200,
  },
  {
    id: 3,
    customer: 'Sarah Chen',
    destination: 'Maldives',
    date: '2024-04-20',
    status: 'confirmed',
    amount: 4800,
  },
];

export default function BookingManagement() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Bookings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="pb-3">Customer</th>
              <th className="pb-3">Destination</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id} className="text-sm">
                <td className="py-3">{booking.customer}</td>
                <td className="py-3">{booking.destination}</td>
                <td className="py-3">{booking.date}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="py-3">${booking.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}