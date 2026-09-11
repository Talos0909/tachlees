export interface Price {
  id: string;
  serviceName: string;
  vendorName: string;
  price: number;
  currency: string;
  priceType: 'FIXED' | 'SUBSCRIPTION' | 'RANGE' | 'TIERED' | 'USAGE_BASED';
  confidence: number;
  lastUpdated: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Vendor {
  id: string;
  name: string;
  website: string;
}

export interface SearchParams {
  category: string;
  location?: string;
  sortBy?: 'price' | 'confidence' | 'recent';
  page?: number;
  limit?: number;
}
