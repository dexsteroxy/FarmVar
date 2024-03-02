import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import MIssion from "../Nav/MIssion";
import Vision from "../Nav/Vision";
import people from "../assets/people.jpg";

const AboutFarm = () => {
  const [showMission, setShowMission] = useState(false);
  const [showVission, setShowVission] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [show, setShow] = useState(false)
  const [showMe, setShowMe] = useState(false)
  return (
    <div className=" font-poppins">
      <div className=" pt-20 bg-secondHero bg-cover bg-center font-poppins h-52">
        <div className=" text-center">
          <h1 className=" text-4xl font-bold font-poppins text-white -mt-2">
            About US
          </h1>
        </div>

        {/* flex container */}
      </div>

      <div className=" flex px-6 gap-x-8 mt-20 mb-4 flex-col lg:flex-row">
        {/* text part */}
        <div>
          <h4 className=" font-medium font-poppins">// About Us</h4>

          <h1 className=" font-poppins text-4xl font-bold text-amazon_blue">
            The Fish Company of Choice
          </h1>

          <p className=" font-poppins pt-5 text-gray-500 text-[17px]">
            Welcome! Bayrise is a fast-budding fish farming company specialized
            in rearing, preserving, and distributing naturally bred Tilapia
            fish. We started our journey way back in 2018 after realizing that
            consumers are increasingly yearning and looking for authentic fish
            cuisine sourced from the world’s most trusted source: the fresh
            waters of Lake Victoria.
          </p>

          <p className=" pt-5  font-poppins text-gray-500 text-[17px]">
            Woven throughout our network of operations is the triple bottom line
            principles: Social responsibility, environmental stewardship, and
            Business success. All our processes undergo rigorous quality
            assurance tests at every stage, ensuring that all our customers get
            only the finest Tilapia. So, look no further. This is it, truly
            natural fish for you.
          </p>

          <Link
            className="btn relative inline-flex cursor-pointer  md:mb-0  mt-7 px-6 py-[12px] items-center justify-start overflow-hidden transition-all bg-transparent border-amazon_blue border-2 rounded hover:bg-gray-500 group"
            to="/contact"
          >
            {/* purple box */}
            <span className="w-0 h-0 rounded bg-amazon_blue absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full t transition-colors duration-150  ease-in-out text-center text-sm font-semibold group-hover:text-white z-10">
              <i class="fa-solid fa-download"></i> Contact Us
            </span>
          </Link>
        </div>

        {/* right part */}

        <div className="">
          <div className=" h-[400px] w-[500px] bg-amazon_light">
            <div className="text-white font-poppins flex items-center justify-center gap-x-8">
              <div>
                <ul className=" flex gap-x-6 text-white font-poppins pt-6 cursor-pointer relative">
                  <NavLink
                    onClick={() => {
                      setShowMission(!showMission);
                    }}
                  >
                    Mission
                  </NavLink>

                  <NavLink
                    onClick={() => {
                      setShowVission(!showVission);
                    }}
                  >
                    Vision
                  </NavLink>
                  <NavLink>Our Modal</NavLink>
                </ul>
                {showMission && (
                  <div>
                    {" "}
                    <MIssion />
                  </div>
                )}

                {showVission && (
                  <div>
                    {" "}
                    <Vision />
                  </div>
                )}
              </div>

              {/* Here is where the second nav will be */}
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row mt-16  items-center justify-center px-6 gap-x-8">
        {/* img */}
        <div className=" ">
          <img src={people} className="" alt="" />
        </div>
        <div className="w-[55%] mt-32 bg-gray-100 p-6 ">
          <h3 className="font-medium font-poppins"> // OUR PASSION</h3>
          <h1 className=" font-bold text-4xl mt-4 text-amazon_blue font-poppins">
            Always Ready to Supply You With The Best Fish
          </h1>
          <p className=" text-[17px] mt-5 leading-6 font-poppins text-gray-500">
            When everybody is turning to genetically modified foods, Bayrise is
            holding steady. We are here to offer you sumptuous, naturally bred
            Tilapia fish. We have a dedicated and professional team that will
            ensure you have your fish bites and cuts just the way you like them.
          </p>

          <Link
            className="btn relative inline-flex cursor-pointer  md:mb-0  mt-7 px-6 py-[12px] items-center justify-start overflow-hidden transition-all bg-transparent border-amazon_blue border-2 rounded hover:bg-gray-500 group"
            to="/contact"
          >
            {/* purple box */}
            <span className="w-0 h-0 rounded bg-amazon_blue absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full t transition-colors duration-150  ease-in-out text-center text-sm font-semibold group-hover:text-white z-10">
              <i class="fa-solid fa-download"></i>Order Now
            </span>
          </Link>
        </div>
      </div>

      <div className=" bg-gray-100 p-6">
        <h3 className=" font-semibold">// OUR CORE VALUES</h3>
        <h1 className=" font-bold text-4xl mt-4 font-poppins text-green-950">
          Passion For Fish, People & Sustainability
        </h1>
        <p className=" text-[17px] font-poppins mt-7 text-gray-500">
          The Bayrise Way is all about Getting Results the Right Way:
        </p>

        <ol className=" mt-8">
          <li className="text-[17px] mt-2  font-poppins text-gray-500">
            <span className=" pr-3 text-amazon_blue">
              <i class="fa-solid fa-square-caret-right"></i>
            </span>
            We Protect People and the Environment
          </li>
          <li className="text-[17px] mt-2 font-poppins text-gray-500">
            {" "}
            <span className=" pr-3 text-amazon_blue">
              <i class="fa-solid fa-square-caret-right"></i>
            </span>{" "}
            We operate with Integrity and strive to earn your Trust
          </li>
          <li className="text-[17px] mt-2 font-poppins text-gray-500">
            {" "}
            <span className=" pr-3 text-amazon_blue">
              <i class="fa-solid fa-square-caret-right"></i>
            </span>{" "}
            We value Partnerships & Ingenuities that leads to High Performance
          </li>
        </ol>
        <p className="text-[17px] font-poppins mt-9 text-gray-500">
          Bayrise is your partner of choice for inclusive and sustainable
          aquaculture for the good of society.
        </p>
        <p className="text-[17px] font-poppins mt-5 text-gray-500">
          We love our customers and all other stakeholders, and we are here to
          help. Together, we can rise and grow sustainably!
        </p>

        {/* flex container */}
        <div>
          <div className=" flex flex-col gap-y-5 mt-12">

            <div onClick={() => {setShowModal(!showModal)}}  className={` ${showModal && 'bg-gray-500 transition-all ease-in-out duration-500'} h-10 w-[520px] transition-all ease-in-out duration-500 bg-white  shadow-sm text-center flex items-center`}>
              <div>
                <p className=" p-2 pl-5 items-center font-poppins text-[20px] font-semibold text-green-950 cursor-pointer">
                  TRUST: why should you trust us?{" "}
                  <span>
                    <i class="fa-solid fa-circle-plus ml-[123px]"></i>
                  </span>
                </p>
              </div>
            </div>

           {
            showModal && (
              <div className=" h-52 w-[520px]  flex space-x-6 items-center p-4">
              <img src={people} className=" h-32" />
              <p className=" font-poppins text-[15px] text-gray-500">
                We are transparent in our business practices, hence we ensure
                every process is quality assured.
              </p>
            </div>
            )
           }

            <div onClick={() => {setShow(!show)}} className={` ${show && 'bg-gray-500 transition-all ease-in-out duration-500'} h-10 w-[520px] transition-all ease-in-out duration-500 bg-white  shadow-sm text-center flex items-center`}>
            <div>
              <p className=" p-2 pl-5 items-center font-poppins text-[20px] font-semibold text-green-950 cursor-pointer">
                INGENUITY: why should you trust us?{" "}
                <span>
                  <i class="fa-solid fa-circle-plus ml-[80px]"></i>
                </span>
              </p>
            </div>
          </div>
          {
            show && (
              <div className=" h-52 w-[520px]  flex space-x-6 items-center p-4">
              <img src={people} className=" h-32" />
              <p className=" font-poppins text-[15px] text-gray-500">
                We are transparent in our business practices, hence we ensure
                every process is quality assured.
              </p>
            </div>
            )
           }


          <div onClick={() => {setShowMe(!showMe)}} className={` ${showMe && 'bg-gray-500 transition-all ease-in-out duration-500'} h-10 w-[520px] bg-white shadow-sm text-center flex items-center`}>
            <div>
              <p className=" p-2 pl-5 items-center font-poppins text-[20px] font-semibold text-green-950 cursor-pointer">
                PARTNERSHIP: why should you trust us?{" "}
                <span>
                  <i class="fa-solid fa-circle-plus ml-[53px]"></i>
                </span>
              </p>
            </div>
          </div>
          {
            showMe && (
              <div className=" h-52 w-[520px]  flex space-x-6 items-center p-4">
              <img src={people} className=" h-32" />
              <p className=" font-poppins text-[15px] text-gray-500">
                We are transparent in our business practices, hence we ensure
                every process is quality assured.
              </p>
            </div>
            )
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFarm;
