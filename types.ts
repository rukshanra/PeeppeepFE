
export interface Car {
  id: number;
  name: string;
  brand: string;
  price: number; // This can be the starting price
  currency: string;
  priceUnit: string;
  avgPriceMin: number;
  avgPriceMax: number;
  imageUrl: string;
  type?: 'SUV' | 'Hatchback' | 'Sedan' | 'MUV' | 'Luxury';
  tags: string[];
  launchDate?: string;

  // New detailed properties for detail page
  rating?: {
    value: number;
    reviews: number;
  };
  priceRange?: string; // e.g., "₹ 4.23 - 6.21 Lakh*"
  exShowroomPrice?: string;
  galleryImages?: {
    type: 'colour' | 'image' | '360' | 'video';
    url: string;
    count?: number;
  }[];
  colors?: {
    name: string;
    hex: string;
    imageUrl: string;
  }[];
  specs?: {
    key: string;
    value: string;
    icon?: React.ComponentType;
  }[];
  variants?: {
    name: string;
    specs: string;
    price: string;
    waiting?: string;
    isTopSelling?: boolean;
  }[];
  expertReview?: {
    title: string;
    content: string;
  };
  pros?: string[];
  cons?: string[];
}


export interface Brand {
  name: string;
  logoUrl: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}
