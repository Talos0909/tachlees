import type { NextApiRequest, NextApiResponse } from 'next';

interface SearchResult {
  id: string;
  serviceName: string;
  vendorName: string;
  price: number;
  currency: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResult[]>
) {
  const { category } = req.query;

  const mockData: SearchResult[] = [
    {
      id: '1',
      serviceName: 'חשמל - חודשי',
      vendorName: 'חברת החשמל',
      price: 450,
      currency: '₪',
    },
    {
      id: '2',
      serviceName: 'חשמל - חודשי',
      vendorName: 'Partner',
      price: 420,
      currency: '₪',
    },
    {
      id: '3',
      serviceName: 'סלולר - חודשי',
      vendorName: 'Cellcom',
      price: 89,
      currency: '₪',
    },
    {
      id: '4',
      serviceName: 'סלולר - חודשי',
      vendorName: 'Orange',
      price: 79,
      currency: '₪',
    },
  ];

  const filtered = mockData.filter((item) =>
    category ? item.serviceName.includes(category as string) : true
  );

  res.status(200).json(filtered);
}
