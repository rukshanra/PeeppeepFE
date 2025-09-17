import React, { useState, useEffect } from 'react';
import type { Car } from '../../types';

type GalleryContent = {
  type: 'image' | 'video' | '360';
  url: string;
};

interface ImageGalleryProps {
  car: Car;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ car }) => {
  const [mainContent, setMainContent] = useState<GalleryContent>({ type: 'image', url: car.imageUrl });

  useEffect(() => {
    // Reset to main image when the car prop changes
    setMainContent({ type: 'image', url: car.imageUrl });
  }, [car.id, car.imageUrl]);

  if (!car.galleryImages || car.galleryImages.length === 0) {
    return <img src={car.imageUrl} alt={car.name} className="w-full h-auto rounded-lg object-cover" />;
  }

  const handleThumbnailClick = (type: string, url: string) => {
    let contentType: 'image' | 'video' | '360' = 'image';
    if (type === 'video' || type === '360') {
      contentType = type;
    }
    setMainContent({ type: contentType, url });
  };

  const renderMainContent = () => {
    if (mainContent.type === 'video' || mainContent.type === '360') {
      return (
        <iframe
          src={mainContent.url}
          title={`${car.name} ${mainContent.type} view`}
          className="w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    return <img src={mainContent.url} alt={car.name} className="w-full h-full rounded-lg object-cover" />;
  };

  return (
    <div className="flex gap-2">
      <div className="flex flex-col space-y-2">
        {car.galleryImages.map((img, index) => (
          <button 
            key={index} 
            onClick={() => handleThumbnailClick(img.type, img.url)}
            className={`w-16 h-16 border rounded-md flex flex-col items-center justify-center text-xs font-medium text-gray-600 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${mainContent.url === img.url ? 'border-orange-500 ring-2' : ''}`}
          >
            {img.type === 'colour' && <span>+{img.count}</span>}
            <span className="capitalize">{img.type === 'colour' ? 'Colours' : img.type}</span>
            {img.type === 'image' && <span>+{img.count}</span>}
          </button>
        ))}
      </div>
      <div className="flex-1 h-64 md:h-auto">
        {renderMainContent()}
      </div>
    </div>
  );
};

export default ImageGallery;
