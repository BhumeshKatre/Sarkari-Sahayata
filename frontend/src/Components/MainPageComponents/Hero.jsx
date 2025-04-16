import React from "react";

import Carosel from "./Carosel";
const Hero = () => {
  return (
    <>
      <div className="hero-container common-flexbox w-[90%] h-[100%] gap-5 p-5 rounded-2xl shadow-amber-50 mx-auto justify-between    ">
        <div className="common-flexbox flex-col  justify-between w-[50%]">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
              भारत सरकार की पहल
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              Get Government Assistance - Your Right, Your Benefit!
            </h1>
            <p>Avail Benefits of Govt Schemes with Easy Application Process!</p>
            <div className="mt-2">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Browse Government Schemes
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                View Job Opportunities
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-[50%] overflow-hidden  h-72 md:h-96">
           <Carosel />
        </div>
       
      </div>
    </>
  );
};

export default Hero;
