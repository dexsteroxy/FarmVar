import React from "react";
import blue from "../assets/blue.png";

const Process = () => {
  return (
    <section>
      <div className=" flex  flex-col items-center justify-center mx-auto mt-20 gap-y-5">
        <h3 className=" font-poppins text-xl font-semibold text-amazon_blue">
          // OUR PROCESS
        </h3>
        <h1 className=" font-bold text-5xl font-poppins text-amazon_blue">
          How We Do Fish Farming
        </h1>
        <p className=" text-[17px] font-poppins mb-8 text-gray-500">
          At Bayrise, we’ve put in place strong processes to consistently
          produce the best fish quality for you
        </p>
      </div>

      {/* flex container */}

      <div className=" flex flex-col lg:flex-row gap-y-12 lg:gap-y-0 gap-x-7 justify-center items-center mb-6 mx-auto container px-12 text-center">
        {/* 1 */}
        <div className="flex flex-col gap-y-4 cursor-pointer  justify-center items-center  text-center">
          <div className=" flex relative">
            <img
              src={blue}
              alt=""
              className=" h-32  shadow-md shadow-amazon_blue rounded-[6000px]"
            />
            <span className=" h-12 w-12 bg-amazon_blue absolute left-20 hover:animate-bounce top-24 text-white font-poppins items-center justify-center flex text-center rounded-full font-bold ">
              01
            </span>
          </div>
          <h3 className=" font-semibold font-poppins text-xl text-amazon_blue">
            Install Fish Cages
          </h3>

          <p className=" font-poppins text-[15px] leading-5 text-gray-500 text-center">
            Our Tilapia are sustainably farmed in large floating fish cages
            located about 2 km offshore Lake Victoria.
          </p>
        </div>

        {/* 2 */}
        <div className="flex flex-col gap-y-4 cursor-pointer  justify-center items-center  text-center">
          <div className=" flex relative">
            <img
              src={blue}
              alt=""
              className=" h-32  shadow-md shadow-amazon_blue rounded-[6000px]"
            />
            <span className=" h-12 w-12 bg-amazon_blue absolute left-20 hover:animate-bounce top-24 text-white font-poppins items-center justify-center flex text-center rounded-full font-bold ">
              02
            </span>
          </div>
          <h3 className=" font-semibold font-poppins text-xl text-amazon_blue">
          Select Fingerlings
          </h3>

          <p className=" font-poppins text-[15px] leading-5 text-gray-500 text-center">
          Our fingerlings come from carefully managed hatcheries where fish eggs are fertilized in carefully monitored conditions.
          </p>
        </div>

        {/* 3 */}
        <div className="flex flex-col gap-y-4 cursor-pointer  justify-center items-center  text-center">
          <div className=" flex relative">
            <img
              src={blue}
              alt=""
              className=" h-32  shadow-md shadow-amazon_blue rounded-[6000px]"
            />
            <span className=" h-12 w-12 bg-amazon_blue absolute left-20 hover:animate-bounce top-24 text-white font-poppins items-center justify-center flex text-center rounded-full font-bold ">
              03
            </span>
          </div>
          <h3 className=" font-semibold font-poppins text-xl text-amazon_blue">
          Feed the Fish
          </h3>

          <p className=" font-poppins text-[15px] leading-5 text-gray-500 text-center">
          We feed the fingerlings using high-quality, vegetable-based fish feeds. Purely natural. No additives, no preservatives.
          </p>
        </div>

        {/* 4 */}
        <div className="flex flex-col gap-y-4 cursor-pointer justify-center items-center  text-center">
          <div className=" flex relative">
            <img
              src={blue}
              alt=""
              className=" h-32  shadow-md shadow-amazon_blue rounded-[6000px]"
            />
            <span className=" h-12 w-12 bg-amazon_blue absolute left-20 hover:animate-bounce top-24 text-white font-poppins items-center justify-center flex text-center rounded-full font-bold ">
              04
            </span>
          </div>
          <h3 className=" font-semibold font-poppins text-xl text-amazon_blue">
          Harvest the Fish
          </h3>

          <p className=" font-poppins text-[15px] leading-5 text-gray-500 text-center">
          The fingerlings reach maturity in about six to eight months upon which we harvest the fish and deliver them to your table.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
