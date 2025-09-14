import React, { useState } from "react";
import "../assets/style/mobile.css";

const DesignMobile = ({ images, captions }) => {
  const [current, setCurrent] = useState(0);
  const totalPages = Math.ceil(images.length / 3); // 3 gambar per halaman

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container-mobile relative w-full max-w-5xl mx-auto">
      {/* tampilkan 3 gambar sekaligus */}
      <div className="flex gap-4 mt-3 w-full ">
        {images.slice(current * 3, current * 3 + 3).map((img, i) => {
          const realIndex = current * 3 + i;
          return (
            <div key={i} className="flex flex-col items-center flex-1">
              <img
                src={img}
                alt={captions?.[realIndex] || `Image ${realIndex + 1}`}
                className="object-cover rounded-2xl shadow-lg"
              />
              {captions && (
                <p className="mt-2 text-sm text-gray-250 text-center">
                  {captions[realIndex]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* tombol prev */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 flex rounded-full"
      >
        &lt;
      </button>

      {/* tombol next */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full shadow"
      >
        &gt;
      </button>

      {/* indikator halaman */}
      <div className="absolute mt-9 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default DesignMobile;
