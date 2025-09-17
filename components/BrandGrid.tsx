import React from 'react';
import type { Brand } from '../types';

interface BrandGridProps {
  brands: Brand[];
}

const BrandGrid: React.FC<BrandGridProps> = ({ brands }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-[#C70039] transition-all duration-300 cursor-pointer">
            <span className="font-semibold text-lg text-gray-700">{brand.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a href="#" className="text-[#C70039] font-semibold hover:underline">
          View All Brands →
        </a>
      </div>
    </section>
  );
};

export default BrandGrid;