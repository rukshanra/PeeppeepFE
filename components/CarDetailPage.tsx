import React from 'react';
import type { Car } from '../types';
import { HeartIcon, ShareIcon } from './icons/Icons';
import ImageGallery from './detail/ImageGallery';
import KeySpecs from './detail/KeySpecs';
import PriceTable from './detail/PriceTable';
import ColorPicker from './detail/ColorPicker';
import RightSidebar from './detail/RightSidebar';

interface CarDetailPageProps {
  car: Car;
}

const CarDetailPage: React.FC<CarDetailPageProps> = ({ car }) => {
  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/#" className="hover:text-[#C70039]">Home</a> &gt; 
        <a href="/#" className="hover:text-[#C70039]"> {car.brand} Cars</a> &gt; 
        <span className="text-gray-700"> {car.name}</span>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <main>
            {/* Image Gallery and Main Info */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageGallery car={car} />
                <div>
                  <div className="flex justify-between items-start">
                    <h1 className="text-3xl font-bold text-gray-900">{car.brand} {car.name}</h1>
                    <div className="flex items-center space-x-3">
                      <button className="text-gray-500 hover:text-red-500"><HeartIcon /></button>
                      <button className="text-gray-500 hover:text-blue-500"><ShareIcon /></button>
                    </div>
                  </div>
                  {car.rating && (
                     <div className="flex items-center mt-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-4 h-4 ${i < Math.floor(car.rating?.value || 0) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-600 text-sm ml-2">{car.rating.value}</span>
                        <a href="#" className="text-sm text-blue-600 ml-2 hover:underline">({car.rating.reviews} Reviews)</a>
                     </div>
                  )}
                  <div className="mt-4">
                    <p className="text-3xl font-bold text-gray-800">
                      {car.priceRange ? car.priceRange : `${car.currency} ${car.price.toFixed(2)} ${car.priceUnit}`}
                    </p>
                    {car.exShowroomPrice && (
                      <p className="text-sm text-gray-500">{car.exShowroomPrice}</p>
                    )}
                    <a href="#" className="text-sm text-blue-600 hover:underline">Get On-Road Price</a>
                  </div>

                   <button className="mt-6 w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600 transition-colors">
                    View September Offers
                   </button>
                </div>
              </div>
            </section>

            {/* Key Specs */}
            {car.specs && (
                <section className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{car.brand} {car.name} specs & features</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <KeySpecs specs={car.specs} />
                    </div>
                </section>
            )}

             {/* Price Table */}
            {car.variants && (
                 <section className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{car.brand} {car.name} price</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <PriceTable variants={car.variants} />
                    </div>
                </section>
            )}

            {/* Colors */}
            {car.colors && car.colors.length > 0 && (
                <section className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{car.brand} {car.name} colours</h2>
                     <div className="bg-white p-6 rounded-lg shadow-md">
                        <ColorPicker colors={car.colors} />
                    </div>
                </section>
            )}

          </main>
        </div>
        <div className="lg:col-span-1">
          <RightSidebar car={car} />
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;