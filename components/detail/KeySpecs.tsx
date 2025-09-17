
import React, { useState } from 'react';

interface KeySpecsProps {
  specs: {
    key: string;
    value: string;
    icon?: React.ComponentType;
  }[];
}

const KeySpecs: React.FC<KeySpecsProps> = ({ specs }) => {
  const [activeTab, setActiveTab] = useState('specs');

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('specs')}
            className={`${
              activeTab === 'specs'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Key Specifications
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`${
              activeTab === 'features'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Top Features
          </button>
          <button
            onClick={() => setActiveTab('standout')}
            className={`${
              activeTab === 'standout'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Stand Out Features
          </button>
        </nav>
      </div>

      <div className="pt-6">
        {activeTab === 'specs' && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {specs.map((spec) => (
                <div key={spec.key} className="flex items-center space-x-3">
                  {spec.icon && <spec.icon />}
                  <div>
                    <p className="text-sm text-gray-500">{spec.key}</p>
                    <p className="font-semibold text-gray-800">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a href="#" className="text-orange-600 font-semibold hover:underline text-sm">
                View All Specs and Features →
              </a>
            </div>
          </div>
        )}
        {activeTab === 'features' && <p>Top Features content goes here.</p>}
        {activeTab === 'standout' && <p>Stand Out Features content goes here.</p>}
      </div>
    </div>
  );
};

export default KeySpecs;
