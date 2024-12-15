import React from 'react';
import { PieChart, Users, Target } from 'lucide-react';

export default function CustomerInsights() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Insights</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Customer Segments</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Luxury Travelers</span>
                <span className="text-sm font-medium">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Adventure Seekers</span>
                <span className="text-sm font-medium">28%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Budget Travelers</span>
                <span className="text-sm font-medium">37%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center space-x-2 mb-3">
            <Target className="h-5 w-5 text-purple-500" />
            <span className="font-medium">Recommended Actions</span>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Launch luxury package promotion for high-value customers</li>
            <li>• Create adventure tour bundles for active travelers</li>
            <li>• Develop early-bird discounts for budget segment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}