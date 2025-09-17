
import React, { useState } from 'react';

interface PriceTableProps {
  variants: {
    name: string;
    specs: string;
    price: string;
    waiting?: string;
    isTopSelling?: boolean;
  }[];
}

const PriceTable: React.FC<PriceTableProps> = ({ variants }) => {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <div>
            <div className="flex items-center space-x-2 mb-4">
                {['All', 'Petrol', 'CNG'].map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1 text-sm rounded-full border ${activeTab === tab ? 'bg-blue-100 text-blue-800 border-blue-300' : 'bg-gray-100 text-gray-700 border-gray-300'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b">
                        <th className="py-3 px-2 font-medium text-sm text-gray-600">Variant</th>
                        <th className="py-3 px-2 font-medium text-sm text-gray-600">Ex-Showroom Price</th>
                        <th className="py-3 px-2 font-medium text-sm text-gray-600 text-right">Compare</th>
                    </tr>
                </thead>
                <tbody>
                    {variants.map((variant, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-2">
                                {variant.isTopSelling && <span className="text-xs bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded-full">TOP SELLING</span>}
                                <p className="font-semibold text-gray-800 mt-1">{variant.name}</p>
                                <p className="text-xs text-gray-500">{variant.specs}</p>
                                {variant.waiting && <p className="text-xs text-gray-500">{variant.waiting}</p>}
                            </td>
                            <td className="py-4 px-2">
                                <p className="font-bold text-gray-900">{variant.price}</p>
                                <a href="#" className="text-xs text-blue-600 hover:underline">Get On-Road Price</a>
                            </td>
                            <td className="py-4 px-2 text-right">
                                <div className="flex items-center justify-end">
                                    <button className="text-sm border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-100 mr-4">View September Offers</button>
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600 rounded border-gray-300 focus:ring-orange-500" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4">
                <a href="#" className="text-orange-600 font-semibold hover:underline text-sm">
                    View All Variants →
                </a>
            </div>
        </div>
    );
};

export default PriceTable;
