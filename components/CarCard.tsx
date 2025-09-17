
import React from 'react';
import type { Car } from '../types';

const PriceGauge: React.FC<{ value: number; min: number; max: number }> = ({ value, min, max }) => {
  const percentage = max > min ? ((value - min) / (max - min)) * 100 : 50;
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className="relative w-full h-2">
      <div className="absolute top-1/2 -translate-y-1/2 h-1.5 w-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full" />
      <div
        className="absolute top-0"
        style={{
          left: `${clampedPercentage}%`,
          transform: 'translateX(-50%) translateY(-100%)',
        }}
      >
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L0 0L16 0L8 10Z" fill="#DC2626"/>
        </svg>
      </div>
    </div>
  );
};


const CarCard: React.FC<{ car: Car }> = ({ car }) => {
  const toyotaImageUrl = "https://img.cdndrive.com/sites/6/2023/11/20121132/2024-toyota-camry-2.jpg";
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full flex flex-col h-full">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={toyotaImageUrl} alt={`${car.brand} ${car.name}`} />
        <span className="absolute bottom-3 right-3 bg-gray-800 bg-opacity-80 text-white text-xs font-bold px-3 py-1.5 rounded-md">{car.brand}</span>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{car.brand} {car.name}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {car.tags.join(' | ')}
          </p>
        </div>
        
        <div className="mt-auto pt-4">
          <div>
            <p className="text-3xl font-black text-gray-900">{car.currency} {car.price.toFixed(2)} {car.priceUnit}</p>
            <p className="text-xs text-gray-500">Avg Price: {car.avgPriceMin.toFixed(2)} - {car.avgPriceMax.toFixed(2)} {car.priceUnit}</p>
          </div>
          <div className="mt-3 mb-2">
            <PriceGauge value={car.price} min={car.avgPriceMin} max={car.avgPriceMax} />
          </div>
          <div className="flex items-center gap-3 mt-4">
            <a href={`#/car/${car.id}`} className="w-full text-center border-2 border-[#C70039] text-[#C70039] font-bold py-2 px-4 rounded-lg hover:bg-[#C70039] hover:text-white transition-colors duration-300">
              More Info
            </a>
            <button className="w-full text-center border-2 border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
              Go to Ad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;