import React, { useState } from "react";
import fish from "../assets/fishpond.webp";
// import { useSpring, animated } from 'react-spring';

import CountUp from "react-countup";

import ScrollTrigger from "react-scroll-trigger";

// function Number({n}) {
//   const {number} = useSpring({
//     from: {number: 0},
//     number: n,
//     delay:200,
//     config: {mass: 1, tension: 20, friction: 10},
//   });
//   return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
// }

const About = () => {
  const [conterOn, setCounterOn] = useState(false);
  const [counting, setCounting] = useState(false)
  const [counted, setCounted] =useState(false)

  return (
    <section className=" mt-20">
      <div className=" mb-12">
        <div className=" flex flex-col lg:flex-row gap-y-6  mx-auto items-center justify-center lg:gap-x-12">
          {/* img */}

          <div>
            <img src={fish} alt="fish img" />
            {/* <Number to={100} */}

            <div className=" flex gap-16 mt-4">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span className=" gap-x-2 items-center flex">
                  <h1 className=" text-2xl font-poppins font-semibold text-amazon_blue">
                    {conterOn && (
                      <CountUp start={0} end={42} duration={4} delay={0} />
                    )}
                  </h1>
                  <span className="text-2xl font-poppins font-semibold text-amazon_blue">
                    +
                  </span>
                </span>
              </ScrollTrigger>

              <ScrollTrigger
                onEnter={() => setCounting(true)}
                onExit={() => setCounting(false)}
              >
                <span className=" gap-x-2 items-center flex">
                  <h1 className=" text-2xl font-poppins font-semibold text-amazon_blue">
                    {counting && (
                      <CountUp start={0} end={8473} duration={4} delay={0} />
                    )}
                  </h1>
                  <span className="text-2xl font-poppins font-semibold text-amazon_blue">
                    K
                  </span>
                </span>
              </ScrollTrigger>

              <ScrollTrigger
                onEnter={() => setCounted(true)}
                onExit={() => setCounted(false)}
              >
                <span className=" gap-x-2 items-center  flex">
                  <h1 className=" text-2xl font-poppins font-semibold text-amazon_blue">
                    {counted && (
                      <CountUp start={0} end={12} duration={4} delay={0} />
                    )}
                  </h1>
                  <span className="text-2xl font-poppins font-semibold text-amazon_blue">
                    <i className="fa-solid fa-users"></i>
                  </span>
                </span>
              </ScrollTrigger>
            </div>

            <div className=" flex gap-[89px]">
              <p className=" text-[15px] font-poppins text-gray-500">
                {" "}
                Fish Cages
              </p>

              <p className=" text-[15px] font-poppins text-gray-500">
                {" "}
                Tilapia Fish
              </p>

              <p className=" text-[15px] font-poppins text-gray-500">
                {" "}
                Staff Members
              </p>
            </div>
          </div>

          <div className=" lg:w-[50%]">
            <h2 className=" text-[20px] leading-6 px-4 lg:px-0 font-semibold font-poppins text-amazon_light">
              12 Fish Cages 540 k Tilapia Fish 18 Staff Members WELCOME TO
              BAYRISE - FRESH FROM LAKE VICTORIA
            </h2>

            <h1 className=" font-bold lg:text-4xl text-xl text-center lg:text-justify font-poppins text-amazon_light my-2">
              Farm Assistants Company
            </h1>

            <p className=" leading-[25px] text-[15px] px-3 lg:px-0 font-poppins text-gray-500 font-normal">
              Welcome to Bayrise! A modern fish farm in Africa, sprawling in the
              deep blue waters of Lake Victoria, produces the finest quality
              Tilapia for local consumption, and export. We are a sustainable
              aquaculture company based along the beautiful shores of Lake
              Victoria in Sori Bay, Migori County, Kenya
            </p>
            <br />

            <p className=" text-[15px] leading-[25px] px-3 lg:px-0 font-poppins text-gray-500 font-normal">
              Our mission is on food security, and we do so by sustainably
              bridging both the local and global demand for Tilapia fish, which
              is a healthier, nutritious protein, with a reduced CO2 footprint
              compared to other protein sources. We work every day to sustain
              accessibility and.
            </p>
            <br />

            <p className=" text-[15px] leading-[25px] px-3 lg:px-0 font-poppins text-gray-500 font-normal">
              Bayrise fish farm supplies both large- and small-scale orders to
              local communities and urban markets, wholesale fish buyers, fish
              processors, hotels, restaurants, retailers, and institutions. One
              can’t forget the goodness of a nutritious, clean tasting fish that
              makes an excellent part of a .
            </p>

            <button
              className="btn relative inline-flex cursor-pointer  md:mb-0  mt-7 px-6 py-[12px] items-center justify-start overflow-hidden transition-all  bg-amazon_light rounded hover:bg-amazon_light group"
              to="/"
            >
              {/* purple box */}
              <span className="w-0 h-0 rounded  bg-gray-200 absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-150  ease-in-out text-center text-sm font-semibold group-hover:text-black z-10">
                <i class="fa-solid fa-download"></i> Contact Us
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
