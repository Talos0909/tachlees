'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

interface SearchResult {
  id: string;
  serviceName: string;
  vendorName: string;
  price: number;
  currency: string;
}

export default function PriceComparison() {
  const [category, setCategory] = useState('electricity');

  const { data, isLoading } = useQuery<SearchResult[]>({
    queryKey: ['prices', category],
    queryFn: () => fetch(`/api/search?category=${category}`).then(r => r.json()),
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          בחר קטגוריה:
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="electricity">חשמל</option>
          <option value="cellular">סלולר</option>
          <option value="internet">אינטרנט</option>
          <option value="insurance">ביטוח</option>
        </select>
      </div>

      {isLoading && <p className="text-center">טוען...</p>}

      {data && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-right">שירות</th>
                <th className="px-4 py-2 text-right">חברה</th>
                <th className="px-4 py-2 text-right">מחיר</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{item.serviceName}</td>
                  <td className="px-4 py-2">{item.vendorName}</td>
                  <td className="px-4 py-2 font-semibold">{item.price} {item.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
