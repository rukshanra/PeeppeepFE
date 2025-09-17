import React, { useState } from 'react';
import { SearchIcon } from './icons/Icons';

const Hero: React.FC = () => {
  const filterChips = ['Hybrid', 'Automatic', '≤ 60,000 km', 'Colombo', 'Under 5M', 'Toyota', 'Honda', 'SUV'];

  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const [searchType, setSearchType] = useState<'new' | 'used'>('new');
  const [filterBy, setFilterBy] = useState<'budget' | 'brand'>('budget');

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight shadow-text">
          Find your next car — <span className="text-yellow-300">fast</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto shadow-text">
          Sri Lanka's smartest car marketplace. Compare prices, get insights, buy with confidence.
        </p>

        <div className="mt-10 max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by brand, model, year, price... e.g. 'Axio 2018 under 9.5M'"
              className="w-full py-4 pl-6 pr-20 text-base sm:text-lg border border-gray-300 rounded-full focus:ring-2 focus:ring-[#C70039] focus:border-transparent transition shadow-sm hover:shadow-md"
              aria-label="Search for a car"
            />
            <button 
              className="absolute inset-y-0 right-0 flex items-center justify-center w-16 h-full bg-[#C70039] text-white rounded-r-full hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C70039]"
              aria-label="Submit search"
            >
              <SearchIcon />
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filterChips.map((chip) => (
            <button
              key={chip}
              className="px-4 py-2 text-sm font-medium bg-white bg-opacity-80 text-gray-800 rounded-full hover:bg-opacity-100 transition-transform transform hover:scale-105 backdrop-blur-sm"
            >
              {chip}
            </button>
          ))}
        </div>
        
        <div className="mt-6 text-center md:hidden">
          <button 
            onClick={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)} 
            className="text-yellow-300 font-semibold hover:underline transition"
          >
            Advanced Search {isAdvancedSearchOpen ? '↑' : '→'}
          </button>
        </div>

        <div className={`mt-8 max-w-2xl mx-auto md:max-w-full bg-white p-6 sm:p-8 rounded-lg shadow-2xl text-left transition-all duration-500 ease-in-out ${isAdvancedSearchOpen ? 'block' : 'hidden'} md:block`}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Find your right car</h2>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="grid grid-cols-2 gap-1 bg-gray-100 p-1 rounded-md w-full md:w-auto flex-shrink-0">
                <button 
                    onClick={() => setSearchType('new')}
                    className={`py-2 px-4 rounded text-sm font-medium transition-colors ${searchType === 'new' ? 'bg-[#C70039] text-white shadow' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                    New Car
                </button>
                <button 
                    onClick={() => setSearchType('used')}
                    className={`py-2 px-4 rounded text-sm font-medium transition-colors ${searchType === 'used' ? 'bg-[#C70039] text-white shadow' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                    Used Car
                </button>
            </div>
            
            <div className="flex items-center space-x-4 flex-shrink-0">
                <label className="flex items-center cursor-pointer">
                    <input 
                        type="radio" 
                        name="filterBy" 
                        value="budget"
                        checked={filterBy === 'budget'} 
                        onChange={() => setFilterBy('budget')}
                        className="form-radio text-[#C70039] focus:ring-[#C70039]"
                    />
                    <span className="ml-2 text-gray-700 text-sm">By Budget</span>
                </label>
                <label className="flex items-center cursor-pointer">
                    <input 
                        type="radio" 
                        name="filterBy" 
                        value="brand"
                        checked={filterBy === 'brand'} 
                        onChange={() => setFilterBy('brand')}
                        className="form-radio text-[#C70039] focus:ring-[#C70039]"
                    />
                    <span className="ml-2 text-gray-700 text-sm">By Brand</span>
                </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C70039] focus:border-transparent">
              <option>Select Budget</option>
              <option>Under 5M</option>
              <option>5M - 10M</option>
              <option>10M - 20M</option>
              <option>Over 20M</option>
            </select>
            <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C70039] focus:border-transparent">
              <option>All Vehicle Types</option>
              <option>SUV</option>
              <option>Hatchback</option>
              <option>Sedan</option>
              <option>MUV</option>
              <option>Luxury</option>
            </select>
            <button className="w-full bg-[#C70039] text-white font-bold py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-300">
                Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;