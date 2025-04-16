import React from "react";
import { popularSchemes } from "../../Data";

const SchemComponent = () => {
  const displayedSchemes = popularSchemes.slice(0, 3);
  return (
    <div className="mt-10">
      <section className="py-12 bg-gray-50 relative ">
        <h2 className="text-3xl absolute top-5 z-10 bg-white rounded-4xl  left-[27%] font-bold text-center mb-8 border w-[50%] p-3 ">
          Government Schemes
        </h2>

        <div className="container mx-auto px-4 border p-8  rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            {displayedSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full max-w-sm mx-auto"
              >
                {/* Image Section */}
                {scheme.src && (
                  <div className="w-full h-36 mb-3 overflow-hidden flex items-center justify-center rounded-md bg-gray-100">
                    <img
                      src={scheme.src}
                      alt={scheme.name}
                      className="h-full object-contain"
                    />
                  </div>
                )}

                {/* Content Section */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-1">{scheme.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 flex-grow">
                    {scheme.description}
                  </p>
                  <div className="flex justify-between items-center mt-1">
                    <button
                      type="button"
                      class="text-white w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Apply Now
                    </button>
                    <button
                      type="button"
                      class="text-white w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {popularSchemes.length > 3 && (
            <div className="flex justify-center mt-8">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                More Scheme
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SchemComponent;
