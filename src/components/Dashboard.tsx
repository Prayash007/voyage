import React from 'react';
import { BarChart3, Users, Package, TrendingUp } from 'lucide-react';
import TrendingDestinations from './TrendingDestinations';
import CustomerInsights from './CustomerInsights';
import BookingManagement from './BookingManagement';
import MarketingTools from './MarketingTools';
import TravelPackages from './booking/TravelPackages';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Travel Agent Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Bookings"
            value="124"
            icon={<Package className="h-6 w-6 text-blue-500" />}
            trend="+12%"
          />
          <StatCard
            title="New Customers"
            value="48"
            icon={<Users className="h-6 w-6 text-green-500" />}
            trend="+8%"
          />
          <StatCard
            title="Revenue"
            value="$52,489"
            icon={<BarChart3 className="h-6 w-6 text-purple-500" />}
            trend="+15%"
          />
          <StatCard
            title="Conversion Rate"
            value="24%"
            icon={<TrendingUp className="h-6 w-6 text-orange-500" />}
            trend="+5%"
          />
        </div>

        <div className="mb-8">
          <TravelPackages />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TrendingDestinations />
          <CustomerInsights />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <BookingManagement />
          <MarketingTools />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <span className={`text-sm font-medium ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </span>
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}