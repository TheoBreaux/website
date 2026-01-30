import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { images } from '../pages/index.js';
import { actorImages } from '../pages/index.js';
import { useSEO } from '../hooks/useSEO';

const ImagePage = () => {
  const { imageName } = useParams();
  const navigate = useNavigate();
  const imageSrc = images[imageName];
  const actorImageSrc = actorImages[imageName];
  const currentImage = imageSrc || actorImageSrc;
  
  // Generate descriptive alt text
  const getAltText = () => {
    if (imageSrc) {
      return `Email marketing campaign image: ${imageName.replace(/-/g, ' ')}`;
    }
    if (actorImageSrc) {
      return `Theo Breaux ${imageName.replace(/-/g, ' ')} headshot`;
    }
    return `Theo Breaux portfolio image: ${imageName}`;
  };

  useSEO({
    title: `Image: ${imageName}`,
    description: `View ${imageName.replace(/-/g, ' ')} from Theo Breaux's portfolio`,
    type: 'ImageObject',
    image: currentImage ? (typeof window !== 'undefined' ? window.location.origin + currentImage : '') : undefined,
    imageAlt: getAltText(),
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img
        src={currentImage}
        className={
          imageSrc
            ? 'max-w-full max-h-[150vh] object-fill rounded-lg shadow-lg mt-20'
            : 'max-w-half max-h-[80vh] object-fill rounded-lg shadow-lg mt-20'
        }
        alt={getAltText()}
        loading="eager"
        itemProp="image"
      />
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        aria-label="Go back to previous page"
      >
        Back to Gallery
      </button>
    </div>
  );
};

export default ImagePage;
