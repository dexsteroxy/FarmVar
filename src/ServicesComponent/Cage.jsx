import React from "react";
import bbc from "../assets/garri.webp";
import faq from "../assets/faq.webp";

import net from "../assets/net.webp";

import net2 from "../assets/net2.webp";

import net3 from "../assets/net3.webp";

import net4 from "../assets/net4.webp";

import net5 from "../assets/net5.webp";

const Cage = () => {
  return (
    <div className=" font-poppins">
      <div className="pt-20 bg-secondHero bg-cover bg-center font-poppins h-52">
        <div className="text-center">
          <h1 className=" text-4xl font-bold font-poppins text-white -mt-2">
            Cages Installation
          </h1>
        </div>
      </div>

      <div className=" grid grid-cols-3 mt-12 place-content-center mx-auto px-6">
        <div className=" bg-gradient-to-t from-gray-500 py- to-gray-800 flex w-64 flex-col items-center justify-center">
          <h3 className=" font-poppins font-bold text-xl text-white mt-4">
            Do You Need Any Help?
          </h3>

          <p className=" text-white font-poppins mt-5 text-[17px]">
            Call Us Today at:
          </p>

          <span className=" h-[1px] w-60 block bg-gray-300 mt-6"></span>

          <h3 className="font-poppins font-bold text-xl text-white mt-6">
            0720 250 509
          </h3>

          <span className=" h-[1px] w-60 block bg-gray-300 mt-3"></span>

          <h3 className="font-poppins font-bold text-xl text-white mt-7">
            0720 250 509
          </h3>
          <p className=" text-white font-poppins mt-5 text-[15px] text-center mb-7">
            For Your Order, To Be Delivered Quickly From a Warehouse Near You!
          </p>

          <span className=" h-2 w-32 block bg-green-700"></span>
        </div>

        <div className=" mr-3">
          <p className=" text-gray-500 text-[15px] font-poppins leading-6">
            At Bayrise we have experienced personnel who will provide training
            and technical support at all stages of fish cage installation. When
            you buy your cages from us, you will get turnkey technical support
            during installation and when you are already established and
            running. Our experts will provide:{" "}
          </p>
        </div>

        <div className=" ml-4">
          <img src={bbc} alt="" className=" w-72" />
        </div>
      </div>

      <div className=" flex items-center justify-center flex-col mb-4">
        <h2 className=" font-semibold text-xl text-green-950 font-poppins mt-5">
          Call us today for your total cage installation solutions.
        </h2>
        <p className=" text-gray-200 mt-4">
          |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        </p>

        <h2 className="font-semibold text-xl text-green-950 font-poppins mt-5">
          High-Density Polyethylene (HDPE) Frame Cage System
        </h2>

        <div className=" flex justify-center items-center space-x-8 mt-5">
          <div className="  ">
            <img src={faq} alt="" className=" h-52 w-72" />
          </div>

          <div className="w-[50%]">
            <p className=" font-poppins text-[15px] text-gray-500 leading-6">
              Our High-quality floating HDPE cage systems for sustainable
              aquaculture comes in different sizes and shapes. They are made
              from PE100 resin, conforming to ISO4427, AS/NZS4130, EN12201,
              DIN8074 standards. The HDPE frame system floats with the density
              of 0.96g/cm³, its flexible and highly resistant to winds and
              waves. Depending on customers operations and request, you can
              couple the cage with production, predator, and cover nets. They
              are:
            </p>
          </div>
        </div>
      </div>

      <div className=" pl-4">
        <div className=" flex items-center space-x-2">
          <i class="fa-solid fa-square-caret-right"></i>
          <p className=" font-poppins text-[15px] text-gray-500">
            Excellent tensile strength and bending resistance, and the lifetime
            can be more than 15 years.
          </p>
        </div>

        <div className=" flex items-center space-x-2 mt-3">
          <i class="fa-solid fa-square-caret-right"></i>
          <p className=" font-poppins text-[15px] text-gray-500">
            Comes with technical support for assembling, installation mooring
            and anchoring by our experienced and qualified staff.
          </p>
        </div>

        <div className=" flex items-center space-x-2 mt-3">
          <i class="fa-solid fa-square-caret-right"></i>
          <p className=" font-poppins text-[15px] text-gray-500">
            Competitively priced, and easy to order & and faster delivery.
          </p>
        </div>

        <div className=" flex items-center justify-center mb-4">
          <button
            className="btn relative inline-flex cursor-pointer  md:mb-0  mt-7 px-6 py-[12px] items-center justify-start overflow-hidden transition-all  bg-amazon_light rounded hover:bg-amazon_light group"
            to="/"
          >
            {/* purple box */}
            <span className="w-0 h-0 rounded  bg-gray-200 absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-white transition-colors duration-150  ease-in-out text-center text-sm font-semibold group-hover:text-black z-10">
              Order Now
            </span>
          </button>
        </div>
        <p className=" text-gray-200 mt-4">
          |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        </p>

        <h2 className="font-semibold text-xl text-green-950 text-center mb-4 font-poppins mt-5">
          Circular High-Density Polyethylene (HDPE) Frame Cage System
        </h2>

        <div>
          <p className="font-poppins text-[15px] text-gray-500 leading-6 px-4">
            Our UV-resistant net system is made from polyethylene with
            cutting-edged technology. It has the advantage of high intensity,
            good security, and lifetime of more than 5 years. We can also supply
            a large range of containment nets, anti-predator nets and anti-bird
            nets in a variety of materials to meet with the requirements of
            different customers.
          </p>

          <div className=" flex items-center space-x-2 mt-3">
            <i class="fa-solid fa-square-caret-right"></i>
            <p className=" font-poppins text-[15px] text-gray-500">
              Available in sizes 10m diameter, 20m diameter, 30m diameters
              frames.
            </p>
          </div>

          <div className=" flex items-center space-x-2 mt-3">
            <i class="fa-solid fa-square-caret-right"></i>
            <p className=" font-poppins text-[15px] text-gray-500">
              Can be matched with either 3m or 6m deep production nets.
            </p>
          </div>

          <div className=" flex items-center space-x-2 mt-3">
            <i class="fa-solid fa-square-caret-right"></i>
            <p className=" font-poppins text-[15px] text-gray-500">
              Can be fitted with predator and cover nets if required by the
              customer. The nets are sold separately.
            </p>
          </div>

          <div className=" flex items-center space-x-2 mt-3">
            <i class="fa-solid fa-square-caret-right"></i>
            <p className=" font-poppins text-[15px] text-gray-500">
              Best suited as medium to large scale production of up to 50 tons.
            </p>
          </div>

          <div className=" flex items-center space-x-2 mt-3">
            <i class="fa-solid fa-square-caret-right"></i>
            <p className=" font-poppins text-[15px] text-gray-500">
              Excellent tensile strength and bending resistance, and the
              lifetime can be more than 15 years.
            </p>
          </div>

          <div className=" flex items-center space-x-2 mt-3">
            <i class="fa-solid fa-square-caret-right"></i>
            <p className=" font-poppins text-[15px] text-gray-500">
              Comes with technical support for assembling, installation mooring
              and anchoring by our experienced and qualified staff.
            </p>
          </div>

          <div className=" flex items-center space-x-2 mt-3">
            <i class="fa-solid fa-square-caret-right"></i>
            <p className=" font-poppins text-[15px] text-gray-500">
              Competitively priced, and easy to order & and faster delivery
            </p>
          </div>

          <div className=" flex items-center justify-center mb-4">
            <button
              className="btn relative inline-flex cursor-pointer  md:mb-0  mt-7 px-6 py-[12px] items-center justify-start overflow-hidden transition-all  bg-amazon_light rounded hover:bg-amazon_light group"
              to="/"
            >
              {/* purple box */}
              <span className="w-0 h-0 rounded  bg-gray-200 absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-150  ease-in-out text-center text-sm font-semibold group-hover:text-black z-10">
                Order Now
              </span>
            </button>
          </div>

          <div>
            <h2 className="font-semibold text-xl text-green-950 font-poppins mt-12 text-center">
              High Quality Nets for Sustainable Aquaculture
            </h2>

            <div className=" flex items-center justify-center px-6 mt-6">
              <p className="font-poppins text-[15px] text-gray-500 leading-6 w-[50%]">
                Our UV-resistant net system is made from polyethylene with
                cutting-edged technology. It has the advantage of high
                intensity, good security, and lifetime of more than 5 years. We
                can also supply a large range of containment nets, anti-predator
                nets and anti-bird nets in a variety of materials to meet with
                the requirements of different customers.
              </p>

              <img src={net} alt="" className=" w-[50%] h-72" />
            </div>
          </div>
          <h2 className="font-semibold text-xl mb-5 text-green-950 font-poppins mt-20 text-center">
            Different Types Of Nets We Have
          </h2>
          <div>
            <p className=" text-gray-200 mt-12 text-center">
              |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
            </p>
            <h2 className="font-semibold text-xl mb-5 text-green-950 font-poppins mt-6 text-center">
              Production Net
            </h2>

            <div className=" flex items-end justify-end space-x-8">
              <img src={net2} alt="" className=" h-52" />
              <p className="font-poppins text-[15px] text-gray-500 leading-6 w-[50%]">
                The UV-resistant net system is made from polyethylene with
                cutting-edged technology. It has the advantage of high
                intensity, good security, and lifetime of more than 5 years.
                Features:
                <div className=" mt-6">
                  <p className=" ">
                    {" "}
                    <i class="fa-solid fa-square-caret-right mr-2"></i>{" "}
                    <span className="font-poppins text-[15px] text-gray-500">
                      Net mesh size 25mm
                    </span>
                  </p>
                  <p className="  ">
                    {" "}
                    <i class="fa-solid fa-square-caret-right mr-2"></i>
                    <span className="font-poppins text-[15px] text-gray-500">
                      PE knotted less net. Diameter – 20m
                    </span>
                  </p>
                  <p className=" ">
                    {" "}
                    <i class="fa-solid fa-square-caret-right mr-2"></i>{" "}
                    <span className="font-poppins text-[15px] text-gray-500">
                      Depth – 6+1m
                    </span>
                  </p>
                </div>
              </p>
            </div>

            <div>
              <p className=" text-gray-200 mt-12 text-center">
                |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
              </p>
              <h2 className="font-semibold text-xl mb-5 text-green-950 font-poppins mt-6 text-center">
                Predator Net
              </h2>

              <div className=" flex space-x-6 ml-4">
                <p className="font-poppins text-[15px] text-gray-500 leading-6 w-[50%]">
                  The UV-resistant net system is made from polyethylene with
                  cutting-edged technology. It has the advantage of high
                  intensity, good security, and lifetime of more than 5 years.
                  Features:
                  <div className=" mt-6">
                    <p className=" ">
                      {" "}
                      <i class="fa-solid fa-square-caret-right mr-2"></i>{" "}
                      <span className="font-poppins text-[15px] text-gray-500">
                        Net mesh size 40mm
                      </span>
                    </p>
                    <p className="  ">
                      {" "}
                      <i class="fa-solid fa-square-caret-right mr-2"></i>
                      <span className="font-poppins text-[15px] text-gray-500">
                        PE knotted net. Diameter – 21.6m
                      </span>
                    </p>
                    <p className=" ">
                      {" "}
                      <i class="fa-solid fa-square-caret-right mr-2"></i>{" "}
                      <span className="font-poppins text-[15px] text-gray-500">
                        Depth – 6.5m
                      </span>
                    </p>
                  </div>
                </p>
                <img src={net3} alt="" className=" h-52" />
              </div>
            </div>

            <p className=" text-gray-200 mt-12 text-center">
              |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
            </p>
            <h2 className="font-semibold text-xl mb-5 text-green-950 font-poppins mt-6 text-center">
              Bird Cover Net
            </h2>

            <div className=" flex items-end justify-end space-x-8 mb-8">
              <img src={net4} alt="" className=" h-52" />
              <p className="font-poppins text-[15px] text-gray-500 leading-6 w-[50%]">
                The UV-resistant net system is made from polyethylene with
                cutting-edged technology. It has the advantage of high
                intensity, good security, and lifetime of more than 5 years.
                Features:
                <div className=" mt-6">
                  <p className=" ">
                    {" "}
                    <i class="fa-solid fa-square-caret-right mr-2"></i>{" "}
                    <span className="font-poppins text-[15px] text-gray-500">
                      PE knotted net
                    </span>
                  </p>
                  <p className="  ">
                    {" "}
                    <i class="fa-solid fa-square-caret-right mr-2"></i>
                    <span className="font-poppins text-[15px] text-gray-500">
                      Diameter 20m, mesh 80mm
                    </span>
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cage;
