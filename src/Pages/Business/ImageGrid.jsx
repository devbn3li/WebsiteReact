import React from "react";

const ImageGrid = () => {
  const images = [
    "/assets/Business/img3.png",
    "/assets/Business/img6.png",
  ];

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden mb-10">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
