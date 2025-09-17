
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarCarousel from './components/CarCarousel';
import BrandGrid from './components/BrandGrid';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import CarDetailPage from './components/CarDetailPage';
import { mostSearchedCars, electricCars, upcomingCars, popularBrands, newsArticles } from './constants';
import type { Car } from './types';

const App: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const carIdMatch = hash.match(/^#\/car\/(\d+)$/);
      
      if (carIdMatch) {
        const carId = parseInt(carIdMatch[1], 10);
        const allCars = [...mostSearchedCars, ...electricCars, ...upcomingCars];
        const car = allCars.find(c => c.id === carId) || null;
        setSelectedCar(car);
        window.scrollTo(0, 0);
      } else {
        setSelectedCar(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        {selectedCar ? (
          <CarDetailPage car={selectedCar} />
        ) : (
          <>
            <Hero />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
              <CarCarousel 
                title="The most searched cars" 
                cars={mostSearchedCars} 
                categories={['SUV', 'Hatchback', 'Sedan', 'MUV', 'Luxury']}
              />
              <CarCarousel 
                title="Electric cars" 
                cars={electricCars}
              />
              <CarCarousel 
                title="Upcoming cars" 
                cars={upcomingCars} 
              />
              <BrandGrid brands={popularBrands} />
              <NewsSection articles={newsArticles} />
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
