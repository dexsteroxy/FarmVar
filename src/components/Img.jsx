import React from "react";
import blue from "../assets/blue.png";
import cat from "../assets/main.jpeg";
import Bg from "./Bg";
const Img = () => {
  return (
    <section className=" lg:mt-32 ">
       
      <div className=" bg-slate-100 lg:h-[1200px] py-12     relative">
        <div className="bg-cage h-screen  relative  lg:bg-cover bg-contain bg-no-repeat mx-2 lg:mx-8 font-poppins lg:bg-top bg-center">
          <div className=" hidden lg:block  h-40 w-[600px] bg-amazon_blue shadow-md rounded-md left-12">
            <div className=" flex flex-col lg:flex-row justify-center items-center gap-6">
              <img src={blue} alt="" className=" h-40 bg-white shadow-md" />
              <h2 className=" font-bold text-2xl text-white font-poppins pr-2">
                Bayrise Fish Farm home of the best locally and naturally bred
                catFish
              </h2>
            </div>
          </div>
        </div>
        <div className=" bg-white items-end z-40 shadow-md p-6  mt-6 flex flex-col l w-[86%] ">
          <div className=" flex items-center  justify-end">
            <div className=" w-[50%]">
              <p className=" font- font-semibold text-amazon_blue text-xl">
                //JOIN THE FRESH REVOLUTION
              </p>
              <h1 className=" font-bold font-poppins text-4xl text-amazon_blue">
                A Sneak Peak On How We Do It
              </h1>
            </div>
            <div className=" w-[50%]">
              <p className=" text-[18px] font-poppins text-gray-500">
                At Bayrise, we are passionate about fish farming and delivering
                quality nutritious Tilapia locally and globally.
              </p>
            </div>
          </div>
        

          <div className="  gap-x-7 mt-12 flex flex-col lg:flex-row mx-auto items-center justify-center mb-6">


            <div className=" max-w-[355px]  z-30  bg-white  overflow-hidden cursor-pointer group">
              {/* img */}
              <div className=" relative overflow-hidden">
                <img
                  className=" group-hover:scale-110  h-[215px] rounded-md  w-full transition-all duration-500"
                  src={cat}
                  alt=""
                />
                {/* badge */}
              
              </div>
              {/* text */}
          
             <div className=" flex flex-col items-center justify-center pt-4">
                <p className=" font-poppins text-[20px] text-gray-500">
                  Home OPerations
                </p>
                <h2 className=" text-amazon_blue font-poppins text-lg font-semibold">
                  Insulated Containers
                </h2>
              </div>

              
           
            </div>

            <div className=" max-w-[355px]  z-30  bg-white  overflow-hidden cursor-pointer group">
              {/* img */}
              <div className=" relative overflow-hidden">
                <img
                  className=" group-hover:scale-110  h-[215px] rounded-md  w-full transition-all duration-500"
                  src={cat}
                  alt=""
                />
                {/* badge */}
              
              </div>
              {/* text */}
          
             <div className=" flex flex-col items-center justify-center pt-4">
                <p className=" font-poppins text-[20px] text-gray-500">
                  Home OPerations
                </p>
                <h2 className=" text-amazon_blue font-poppins text-lg font-semibold">
                  Fish feeds
                </h2>
              </div>

              
           
            </div>

            <div className=" max-w-[355px]  z-30  bg-white  overflow-hidden cursor-pointer group">
              {/* img */}
              <div className=" relative overflow-hidden">
                <img
                  className=" group-hover:scale-110  h-[215px] rounded-md  w-full transition-all duration-500"
                  src={cat}
                  alt=""
                />
                {/* badge */}
              
              </div>
              {/* text */}
          
             <div className=" flex flex-col items-center justify-center pt-4">
                <p className=" font-poppins text-[20px] text-gray-500">
                  Home operation
                </p>
                <h2 className=" text-amazon_blue font-poppins text-lg font-semibold">
                  Security house
                </h2>
              </div>

              
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Img;
