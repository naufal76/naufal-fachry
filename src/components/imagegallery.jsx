import { useState } from "react";

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const designitems = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
  ];

  return (
    <div className="p-10 bg-gray-800 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center">Gallery</h2>

      {/* Grid Gambar */}
      <div className="grid grid-cols-3 gap-4">
        {designitems.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-40 object-cover rounded-lg cursor-pointer transition duration-300 hover:scale-105"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Pop-up Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-white p-4 rounded-lg max-w-3xl">
            <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg" />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}