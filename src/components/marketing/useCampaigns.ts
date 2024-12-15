import { useState } from 'react';
import type { CampaignFormData } from './CampaignModal';

interface Campaign extends CampaignFormData {
  id: string;
  status: 'active' | 'scheduled';
  metrics: {
    engagement?: string;
    openRate?: string;
    clicks?: string;
  };
}

export function useCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const createCampaign = (data: CampaignFormData) => {
    const newCampaign: Campaign = {
      ...data,
      id: Date.now().toString(),
      status: 'scheduled',
      metrics: {
        engagement: '0',
        openRate: '0%',
        clicks: '0',
      },
    };

    setCampaigns((prev) => [...prev, newCampaign]);
  };

  return {
    campaigns,
    createCampaign,
  };
}