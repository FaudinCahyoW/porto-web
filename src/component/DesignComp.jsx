import  { useState } from "react";
import "../assets/style/web.css";

const DesignComp = ({ images, captions,widths }) => {
  const [current, setCurrent] = useState(0);
  const totalPages = images.length; // karena 1 gambar per slide

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container-mobile relative mx-auto">
      {/* tampilkan 1 gambar */}
      <div className="flex flex-col items-center">
        <img
          src={images[current]}
          alt={captions?.[current] || `Image ${current + 1}`}
          className="object-contain rounded-2xl shadow-lg"
          width={widths[current]}
        />
        {captions && (
          <p className="mt-3 text-base text-gray-300 text-center">
            {captions[current]}
          </p>
        )}
      </div>

      {/* tombol prev */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full shadow"
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
      <div className="absolute mt-6 left-1/2 -translate-x-1/2 flex gap-2">
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

export default DesignComp;
