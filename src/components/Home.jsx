import React from "react";
import kc from "../assets/kc.png";
import About from "./About";
import Product from "./Product";
import Process from "./Process";
import Img from "./Img";
import Bg from "./Bg";
import Footer from "./Footer";

const Home = () => {
  return (
    <section>
      <section className=" h-screen bg-secondHero relative mb-6 bg-cover font-poppins mdl:bg-top bg-center">
        <div className=" flex flex-col justify-center items-center text-center ">
          <img src={kc} className=" h-72 -mt-28 " alt="logo-img" />
          <div className="mt-[28px]">
            <h1 className=" text-white font-extrabold text-4xl ">
              COMMERCIAL AQUACULTURE FARM
            </h1>
            <h2 className=" text-gray-200 font-medium text-2xl mt-8">
              The future of aqua farming start here
            </h2>

            <div className="mt-16">
              <button
                className="btn relative inline-flex cursor-pointer  md:mb-0  mt-7 px-6 py-[12px] items-center justify-start overflow-hidden transition-all  bg-amazon_light rounded hover:bg-amazon_light group"
                to="/"
              >
                {/* purple box */}
                <span className="w-0 h-0 rounded  bg-gray-200 absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-white transition-colors duration-150  ease-in-out text-center text-sm font-semibold group-hover:text-black z-10">
                  <i class="fa-solid fa-download"></i> Read More
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Product />
      <Process />
    </section>
  );
};

export default Home;
