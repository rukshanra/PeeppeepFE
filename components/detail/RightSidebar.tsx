
import React from 'react';
import type { Car } from '../../types';

interface RightSidebarProps {
  car: Car;
}

const TrendingCarItem: React.FC<{name: string, price: string, imageUrl: string}> = ({name, price, imageUrl}) => (
    <div className="flex items-center space-x-4 py-3 border-b last:border-b-0">
        <img src={imageUrl} alt={name} className="w-20 h-14 object-cover rounded"/>
        <div>
            <p className="font-semibold text-sm text-gray-800">{name}</p>
            <p className="text-sm text-gray-600">{price}</p>
        </div>
    </div>
);

const RightSidebar: React.FC<RightSidebarProps> = ({ car }) => {
    const trendingCars = [
        { name: 'Maruti Swift', price: '₹6.49 - 9.64 Lakh*', imageUrl: 'https://imgd.aeplcdn.com/128x72/n/cw/ec/166895/swift-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80' },
        { name: 'Maruti Baleno', price: '₹6.74 - 9.96 Lakh*', imageUrl: 'https://imgd.aeplcdn.com/128x72/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80' },
        { name: 'Maruti Wagon R', price: '₹5.79 - 7.62 Lakh*', imageUrl: 'https://imgd.aeplcdn.com/128x72/n/cw/ec/102129/wagon-r-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80' }
    ];

    const priceInCities = [
        {city: 'Bangalore', price: '₹5.01 - 7.57 Lakh'},
        {city: 'Mumbai', price: '₹5.04 - 7.18 Lakh'},
        {city: 'Pune', price: '₹5.04 - 7.18 Lakh'},
        {city: 'Hyderabad', price: '₹4.96 - 7.31 Lakh'},
    ];


  return (
    <aside className="space-y-6 sticky top-24">
      {/* Calculate EMI */}
      <div className="bg-white p-5 rounded-lg border">
        <h3 className="font-bold text-lg">Calculate EMI</h3>
        <p className="text-sm text-gray-500">Your Monthly EMI</p>
        <p className="text-2xl font-bold mt-1">₹11,324 <a href="#" className="text-sm text-blue-600 font-normal hover:underline">Edit EMI</a></p>
        <p className="text-xs text-gray-400 mt-1">Interest calculated at 9.8% for 48 months</p>
        <button className="mt-4 w-full border border-gray-300 text-center py-2 rounded-md font-semibold text-sm hover:bg-gray-100">View EMI Offers</button>
      </div>
      
      {/* Trending Cars */}
      <div className="bg-white p-5 rounded-lg border">
        <h3 className="font-bold text-lg mb-2">Trending {car.brand} Cars</h3>
        <div>
            {trendingCars.map(item => <TrendingCarItem key={item.name} {...item} />)}
        </div>
        <a href="#" className="text-orange-600 font-semibold hover:underline text-sm mt-4 inline-block">View All {car.brand} Cars →</a>
      </div>

       {/* Price in cities */}
      <div className="bg-white p-5 rounded-lg border">
        <h3 className="font-bold text-lg mb-2">{car.name} price in India</h3>
        <p className="text-xs text-gray-500 mb-3">On-Road Price</p>
        <div>
            {priceInCities.map(item => (
                <div key={item.city} className="flex justify-between py-2 border-b text-sm">
                    <a href="#" className="text-blue-600 hover:underline">{item.city}</a>
                    <span className="text-gray-700">{item.price}</span>
                </div>
            ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
