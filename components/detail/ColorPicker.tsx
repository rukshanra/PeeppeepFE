import React, { useState } from 'react';

interface ColorPickerProps {
    colors: {
        name: string;
        hex: string;
        imageUrl: string;
    }[];
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors }) => {
    if (!colors || colors.length === 0) {
        return null;
    }
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <div className="relative">
                <img 
                    src={selectedColor.imageUrl} 
                    alt={selectedColor.name}
                    className="w-full rounded-lg object-cover transition-all duration-300"
                />
            </div>
            <div className="mt-4">
                 <p className="text-center font-medium">{selectedColor.name}</p>
                 <div className="flex justify-center items-center space-x-3 mt-2">
                    {colors.map(color => (
                        <button 
                            key={color.name}
                            onClick={() => setSelectedColor(color)}
                            className={`w-8 h-8 rounded-full border-2 transition-transform transform hover:scale-110 ${selectedColor.name === color.name ? 'border-orange-500 scale-110' : 'border-gray-300'}`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                        >
                        </button>
                    ))}
                 </div>
            </div>
             <div className="mt-6 text-center">
                <a href="#" className="text-orange-600 font-semibold hover:underline text-sm">
                    View All {colors.length} Colours →
                </a>
            </div>
        </div>
    );
};

export default ColorPicker;