
import type { Car, Brand, NewsArticle } from './types';
import { EngineIcon, PowerIcon, TorqueIcon, TransmissionIcon, MileageIcon, FuelIcon } from './components/icons/Icons';

const altoK10: Car = {
  id: 15,
  name: 'Alto K10',
  brand: 'Maruti',
  price: 4.23,
  currency: '₹',
  priceUnit: 'Lakh',
  avgPriceMin: 4.00,
  avgPriceMax: 6.50,
  imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/102909/maruti-suzuki-alto-k10-right-front-three-quarter7.jpeg?isig=0&q=80',
  type: 'Hatchback',
  tags: ['Petrol', 'Manual/Automatic', 'City Car'],
  rating: {
    value: 4.4,
    reviews: 451,
  },
  priceRange: "₹ 4.23 - 6.21 Lakh*",
  exShowroomPrice: "Ex-Showroom Price in New Delhi",
  galleryImages: [
    { type: 'colour', url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/102909/maruti-suzuki-alto-k10-right-front-three-quarter7.jpeg?isig=0&q=80', count: 7 },
    { type: 'image', url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/102909/maruti-suzuki-alto-k10-right-front-three-quarter7.jpeg?isig=0&q=80', count: 14 },
    { type: '360', url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/102909/maruti-suzuki-alto-k10-right-front-three-quarter7.jpeg?isig=0&q=80' },
    { type: 'video', url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/102909/maruti-suzuki-alto-k10-right-front-three-quarter7.jpeg?isig=0&q=80' },
  ],
  specs: [
    { key: 'Engine', value: '998 cc', icon: EngineIcon },
    { key: 'Power', value: '55.92 - 65.71 bhp', icon: PowerIcon },
    { key: 'Torque', value: '82.1 Nm - 89 Nm', icon: TorqueIcon },
    { key: 'Transmission', value: 'Manual / Automatic', icon: TransmissionIcon },
    { key: 'Mileage', value: '24.39 - 24.9 kmpl', icon: MileageIcon },
    { key: 'Fuel', value: 'CNG / Petrol', icon: FuelIcon },
  ],
  variants: [
    { name: 'Alto K10 STD', specs: '998 cc, Manual, Petrol, 24.39 kmpl', price: '₹4.23 Lakh*', waiting: '1 month waiting' },
    { name: 'Alto K10 LXi', specs: '998 cc, Manual, Petrol, 24.39 kmpl', price: '₹5 Lakh*', waiting: '1 month waiting' },
    { name: 'Alto K10 VXI', specs: '998 cc, Manual, Petrol, 24.39 kmpl', price: '₹5.30 Lakh*', waiting: '1 month waiting', isTopSelling: true },
    { name: 'Alto K10 VXI Plus', specs: '998 cc, Manual, Petrol, 24.39 kmpl', price: '₹5.59 Lakh*', waiting: '1 month waiting' },
  ],
  colors: [
    { name: 'Metallic Sizzling Red', hex: '#B91C1C', imageUrl: 'https://imgd.aeplcdn.com/128x72/n/cw/ec/102909/alto-k10-exterior-right-front-three-quarter-2.jpeg?q=80' },
    { name: 'Metallic Silky Silver', hex: '#D1D5DB', imageUrl: 'https://imgd.aeplcdn.com/128x72/n/cw/ec/102909/alto-k10-exterior-right-front-three-quarter-2.jpeg?q=80' },
    { name: 'Premium Earth Gold', hex: '#FCD34D', imageUrl: 'https://imgd.aeplcdn.com/128x72/n/cw/ec/102909/alto-k10-exterior-right-front-three-quarter-2.jpeg?q=80' },
    { name: 'Solid White', hex: '#FFFFFF', imageUrl: 'https://imgd.aeplcdn.com/128x72/n/cw/ec/102909/alto-k10-exterior-right-front-three-quarter-2.jpeg?q=80' },
  ],
};


export const mostSearchedCars: Car[] = [
  altoK10,
  { id: 1, name: 'Nexon', brand: 'Tata', price: 65.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 60.00, avgPriceMax: 75.00, imageUrl: 'https://img.cdndrive.com/sites/6/2023/09/01182103/2023-tata-nexon-ev-2.jpg', type: 'SUV', tags: ['Petrol', 'Automatic', 'Colombo'] },
  { id: 2, name: 'Punch', brand: 'Tata', price: 45.50, currency: 'LKR', priceUnit: 'M', avgPriceMin: 42.00, avgPriceMax: 55.00, imageUrl: 'https://img.cdndrive.com/sites/6/2023/08/10182502/tata-punch-cng-2.jpg', type: 'SUV', tags: ['Petrol', 'Manual', 'Kandy'] },
  { id: 3, name: 'XUV700', brand: 'Mahindra', price: 95.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 90.00, avgPriceMax: 110.00, imageUrl: 'https://img.cdndrive.com/sites/6/2024/01/16140502/2024-mahindra-xuv700-11.jpg', type: 'SUV', tags: ['Diesel', 'Automatic', 'Galle'] },
  { id: 4, name: 'FRONX', brand: 'Maruti', price: 58.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 55.00, avgPriceMax: 65.00, imageUrl: 'https://img.cdndrive.com/sites/6/2023/04/24180424/maruti-suzuki-fronx-2.jpg', type: 'Hatchback', tags: ['Hybrid', 'Automatic', 'Colombo'] },
  { id: 5, name: 'Creta', brand: 'Hyundai', price: 82.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 78.00, avgPriceMax: 90.00, imageUrl: 'https://img.cdndrive.com/sites/6/2024/01/16111048/2024-hyundai-creta-facelift-8.jpg', type: 'SUV', tags: ['Petrol', 'Automatic', 'Negombo'] },
  { id: 6, name: 'City', brand: 'Honda', price: 98.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 95.00, avgPriceMax: 105.00, imageUrl: 'https://img.cdndrive.com/sites/6/2023/03/02120409/2023-honda-city-facelift-2.jpg', type: 'Sedan', tags: ['Petrol', 'CVT', 'Colombo'] },
];

export const electricCars: Car[] = [
  { id: 7, name: 'BE.05 2025 Model', brand: 'Mahindra', price: 130.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 120.00, avgPriceMax: 140.00, imageUrl: 'https://img.cdndrive.com/sites/6/2022/08/16001035/mahindra-be05-electric-suv-concept-2.jpg', tags: ['Electric', 'Automatic', 'Sri Lanka'] },
  { id: 8, name: 'MG4 EV', brand: 'MG', price: 115.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 110.00, avgPriceMax: 125.00, imageUrl: 'https://img.cdndrive.com/sites/5/2022/09/01004810/2023-mg4-ev-xpower-2.jpg', tags: ['Electric', 'Automatic', 'Import'] },
  { id: 9, name: 'Nexon EV', brand: 'Tata', price: 72.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 68.00, avgPriceMax: 80.00, imageUrl: 'https://img.cdndrive.com/sites/6/2023/09/07122114/tata-nexon-ev-facelift-2.jpg', tags: ['Electric', 'Automatic', 'New Variant'] },
  { id: 10, name: 'VF6', brand: 'VinFast', price: 95.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 90.00, avgPriceMax: 105.00, imageUrl: 'https://img.cdndrive.com/sites/6/2023/10/01103738/vinfast-vf6-2.jpg', tags: ['Electric', 'Automatic', 'Vietnam'] },
];

export const upcomingCars: Car[] = [
  { id: 11, name: 'Thar', brand: 'Mahindra', price: 85.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 80.00, avgPriceMax: 95.00, imageUrl: 'https://img.cdndrive.com/sites/6/2023/01/10001002/mahindra-thar-2wd-2.jpg', launchDate: 'Facelift Coming Soon', tags: ['4x4', 'Diesel', 'Facelift'] },
  { id: 12, name: 'EX30', brand: 'Volvo', price: 180.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 170.00, avgPriceMax: 200.00, imageUrl: 'https://img.cdndrive.com/sites/6/2023/11/08170155/volvo-ex30-2.jpg', launchDate: 'Expected Launch: Nov 2025', tags: ['Electric', 'Luxury', 'SUV'] },
  { id: 13, name: 'iX', brand: 'BMW', price: 450.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 430.00, avgPriceMax: 480.00, imageUrl: 'https://img.cdndrive.com/sites/5/2022/11/22013146/bmw-ix-2.jpg', launchDate: 'Launched', tags: ['Electric', 'Luxury', 'Performance'] },
  { id: 14, name: 'Punch EV', brand: 'Tata', price: 55.00, currency: 'LKR', priceUnit: 'M', avgPriceMin: 50.00, avgPriceMax: 60.00, imageUrl: 'https://img.cdndrive.com/sites/6/2024/01/17112002/tata-punch-ev-2.jpg', launchDate: 'Launched', tags: ['Electric', 'SUV', 'Compact'] },
];

export const popularBrands: Brand[] = [
    { name: 'Maruti', logoUrl: 'https://picsum.photos/seed/maruti/100/60' },
    { name: 'Tata', logoUrl: 'https://picsum.photos/seed/tata/100/60' },
    { name: 'Kia', logoUrl: 'https://picsum.photos/seed/kia/100/60' },
    { name: 'Toyota', logoUrl: 'https://picsum.photos/seed/toyota/100/60' },
    { name: 'Hyundai', logoUrl: 'https://picsum.photos/seed/hyundai/100/60' },
    { name: 'Mahindra', logoUrl: 'https://picsum.photos/seed/mahindra/100/60' },
];

export const newsArticles: NewsArticle[] = [
  { id: 1, title: 'Upcoming Skoda Octavia RS Performance Sedan India Launch Con...', imageUrl: 'https://img.cdndrive.com/sites/6/2021/08/27125330/skoda-octavia-rs-245-2.jpg', excerpt: 'The upcoming Octavia RS will be brought t...', author: 'By Dipan', date: 'Sep 17, 2025' },
  { id: 2, title: 'Hyundai Creta Emerges Victorious In The Compact SUV Sales In...', imageUrl: 'https://img.cdndrive.com/sites/6/2024/01/16111048/2024-hyundai-creta-facelift-8.jpg', excerpt: 'The overall segment sales took a 7 percent hit in August 2025, with a decline of over...', author: 'By Dipan', date: 'Sep 17, 2025' },
  { id: 3, title: 'Maruti Grand Vitara Global NCAP Rating Compared With Volkswagen ...', imageUrl: 'https://img.cdndrive.com/sites/6/2022/09/26131011/maruti-suzuki-grand-vitara-2.jpg', excerpt: 'While all three rivals flaunt a 5-star Global NCAP rating, the Victoris has a much high...', author: 'By Dipan', date: 'Sep 16, 2025' },
];
