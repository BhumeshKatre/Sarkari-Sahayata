import React from 'react';


const Carosel = ({ carouselItems }) => {
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`duration-700 ease-in-out ${index === 0 ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src={item.image}
              className="absolute block w-full bg-cover h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={item.alt}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p>{item.description}</p>
              <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {carouselItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-current={index === 0}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white rtl:rotate-180" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white rtl:rotate-180" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carosel;
