'use client';

import PriceComparison from '@/components/PriceComparison';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            תאכלס
          </h1>
          <p className="text-xl text-gray-600">הכי זול בארץ</p>
        </header>
        <PriceComparison />
      </div>
    </main>
  );
}
