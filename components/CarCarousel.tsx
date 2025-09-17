
import React, { useState, useRef } from 'react';
import type { Car } from '../types';
import CarCard from './CarCard';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/Icons';

interface CarCarouselProps {
  title: string;
  cars: Car[];
  categories?: string[];
}

const CarCarousel: React.FC<CarCarouselProps> = ({ title, cars, categories }) => {
  const [activeCategory, setActiveCategory] = useState(categories ? categories[0] : '');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredCars = categories ? cars.filter(car => car.type === activeCategory) : cars;
  const displayCars = categories ? filteredCars : cars;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {categories && (
          <div className="hidden md:flex items-center border border-gray-200 rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-[#C70039] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
         <div className="flex items-center space-x-2">
            <button onClick={() => scroll('left')} className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-100 transition disabled:opacity-50">
                <ChevronLeftIcon />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-100 transition disabled:opacity-50">
                <ChevronRightIcon />
            </button>
        </div>
      </div>
      
      <div className="relative">
        <div ref={scrollContainerRef} className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide">
          {displayCars.map((car) => (
            <div key={car.id} className="w-80 flex-shrink-0">
                <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
       <div className="mt-4 text-center">
        <a href="#" className="text-[#C70039] font-semibold hover:underline">
          View All {title} →
        </a>
      </div>
    </section>
  );
};

export default CarCarousel;
