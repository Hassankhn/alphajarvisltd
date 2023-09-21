import React from "react";
import Image from "next/image";

const AboutusComponent = () => {
  return (
        <div className="w-full relative h-80 bg-aboutus-bg bg-center bg-cover">
      <div className="w-full h-full bg-black/70 flex  justify-center items-center">
        <div className="w-11/12 h-auto p-4 text-white border-white border-2 bg-black/70 text-center">
          <h1 className="mb-4">Why Alpha Jarvis?</h1>
          <p className="mb-4">
            Alpha Jarvis lts is uniquely positioned to support our clients
            across the globe. Our team is dedicated to helping our customers
            ensure they are realizing the greatest value from their technology
            investment.
          </p>
          <button className="px-4 py-2 border bg-white bg-gradient-to-r text-black from-white via-slate-100 to-white uppercase text-sm font-bold rounded-md hover:from-pink-500 hover:to-yellow-500 hover:text-white duration-300">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutusComponent;
