import React, { useState } from 'react';
import { Mail, Instagram, Facebook } from 'lucide-react';
import CampaignModal from './marketing/CampaignModal';
import { useCampaigns } from './marketing/useCampaigns';

export default function MarketingTools() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { campaigns, createCampaign } = useCampaigns();

  const handleCreateCampaign = (data: any) => {
    createCampaign(data);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Marketing Campaigns</h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-blue-500" />
              <span className="font-medium text-blue-900">Email Campaign</span>
            </div>
            <span className="text-sm text-blue-600">32% open rate</span>
          </div>
          <p className="text-sm text-blue-600">Summer Vacation Early Birds</p>
        </div>

        <div className="p-4 bg-pink-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Instagram className="h-5 w-5 text-pink-500" />
              <span className="font-medium text-pink-900">Instagram</span>
            </div>
            <span className="text-sm text-pink-600">2.4k engagement</span>
          </div>
          <p className="text-sm text-pink-600">Luxury Destinations Showcase</p>
        </div>

        <div className="p-4 bg-indigo-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Facebook className="h-5 w-5 text-indigo-500" />
              <span className="font-medium text-indigo-900">Facebook</span>
            </div>
            <span className="text-sm text-indigo-600">1.8k clicks</span>
          </div>
          <p className="text-sm text-indigo-600">Family Package Promotion</p>
        </div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-colors"
      >
        Create New Campaign
      </button>

      <CampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateCampaign}
      />
    </div>
  );
}