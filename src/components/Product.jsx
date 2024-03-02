import React from "react";
import people from "../assets/bigfish.jpg";
import water from "../assets/dried.jpg";
import cat from "../assets/main.jpeg";

const Product = () => {
  return (
    <section className=" mt-32 mb-6">
      <div className=" flex flex-col relative  gap-x-12 lg:flex-row items-center  justify-center mx-auto">
        <div className=" bg-amazon_blue lg:h-[500px] h-72 lg:w-[600px]">
          <div className=" flex flex-col lg:pl-12 px-6 lg:px-0 pt-20">
            <h2 className=" text-xl font-medium font-poppins text-gray-400">
              // OUR PRODUCTS
            </h2>
            <h1 className=" font-bold text-4xl font-poppins text-white">
              Quality Fresh Fish
            </h1>
          </div>
        </div>

        <div className=" lg:w-[50%] h-[240px]">
          <p className=" text-gray-500 lg:text-[16px] px-3 lg:px-0 text-[18px] mt-3 lg:mt-0 font-poppins">
            Quality Fresh Fish Bayrise brings you the finest Tilapia fish to
            <br /> delight your taste buds.
          </p>
        </div>
      </div>

      <div className=" flex bg-slate-100 gap-y-12 lg:gap-y-0 -mt-28  lg:-mt-52 py-12 flex-col lg:flex-row  items-center justify-center px-6 mx-auto lg:gap-x-6">
        {/* post 1 */}

        <div className=" max-w-[355px] z-30 shadow-xl bg-white  overflow-hidden cursor-pointer group">
          {/* img */}
          <div className=" relative overflow-hidden">
            <img
              className=" group-hover:scale-110 transition-all duration-500"
              src={people}
              alt=""
            />
            {/* badge */}
          </div>
          {/* text */}
          <div className=" px-3  py-6 flex flex-col">
            <h1 className=" text-center font-semibold text-xl pb-3 font-poppins text-amazon_blue">
              Indigenous Fish
            </h1>

            <p className=" text-[15px] font-poppins text-gray-500 text-center">
              Indigenous African CatFish species that are naturally tender and
              delicious
            </p>

            <span className=" border-b-2 group-hover:border-amazon_blue pt-8 transition ease-in-out duration-700"></span>

            <button className=" text-[14px] font-bold text-amazon_blue font-serif mt-8 mb-4">
              VIEW MORE <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>

        {/* post 1 */}

        <div className=" max-w-[355px] z-30 bg-white shadow-xl   overflow-hidden cursor-pointer group">
          {/* img */}
          <div className=" relative overflow-hidden">
            <img
              className=" group-hover:scale-110  w-full transition-all duration-500"
              src={water}
              alt=""
            />
            {/* badge */}
          </div>
          {/* text */}
          <div className=" px-3  py-6 flex flex-col">
            <h1 className=" text-center font-semibold text-2xl font-poppins text-amazon_blue">
              Dried Fish
            </h1>

            <p className=" text-[15px] font-poppins text-gray-500 text-center">
              Reach in flavour leaving you carving for more
            </p>

            <span className=" border-b-2 group-hover:border-amazon_blue pt-6 transition ease-in-out duration-700"></span>

            <button className=" text-[14px] font-bold text-amazon_blue font-serif mt-6 mb-3">
              VIEW MORE <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>

        {/* post 1 */}

        <div className=" max-w-[355px] shadow-xl z-30  bg-white  overflow-hidden cursor-pointer group">
          {/* img */}
          <div className=" relative overflow-hidden">
            <img
              className=" group-hover:scale-110 h-[215px]  w-full transition-all duration-500"
              src={cat}
              alt=""
            />
            {/* badge */}
          </div>
          {/* text */}
          <div className=" px-3  py-6 flex flex-col">
            <h1 className=" text-center font-semibold text-2xl font-poppins text-amazon_blue">
              Dried Fish
            </h1>

            <p className=" text-[15px] font-poppins text-gray-500 text-center">
              Reach in flavour leaving you carving for more and also really
              wanting to eat more of it or taste another one
            </p>

            <span className=" border-b-2 group-hover:border-amazon_blue pt-6 transition ease-in-out duration-700"></span>

            <button className=" text-[14px] font-bold text-amazon_blue font-serif mt-6 mb-3">
              VIEW MORE <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
