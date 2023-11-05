import React, { useState } from "react";
import { PhotoProps } from "./PhotoProps.type";

const Photo: React.FC<PhotoProps> = ({ image, text }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="group relative">
      {isLoading && (
        <div className="w-64 h-20 bg-gray-300 animate-pulse rounded-md"></div>
      )}
      <img
        src={image}
        alt={text}
        className="w-full h-auto rounded-md"
        onLoad={handleImageLoad}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
        {text}
      </div>
    </div>
  );
};

export default Photo;
