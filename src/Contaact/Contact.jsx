import React from "react";

const Contact = () => {
  return (
    <div className=" font-poppins bg-gray-100 h-full ">
      <div className="pt-20 bg-secondHero bg-cover bg-center font-poppins h-52">
        <div className="text-center">
          <h1 className=" text-4xl font-bold font-poppins text-white -mt-2">
            Contact US
          </h1>
        </div>
      </div>
      <div>
        <div className=" flex items-center justify-center flex-col mt-20">
          <p className=" text-green-950 font-semibold">GET IN TOUCH</p>
          <h1 className=" text-green-950 font-bold text-4xl mt-4">
            Total Solutions Provider
          </h1>
          <p className=" text-[15px] font-poppins text-gray-500 mt-4 mb-4">
            We take pride in our all rounded aqua-culture solutions that are not
            only innovative but well thought out solutions to make your fish
            farming practices stand out.
          </p>
        </div>
      </div>

      <div className=" flex items-center space-x-8 justify-center">
        <form className=" bg-white p-8 h-fit w-fit shadow-sm  items-center justify-center">
          <div className=" flex gap-4">
            <input
              type="text"
              placeholder="Your Name*"
              className=" border-none outline-none bg-gray-100 p-2 w-[340px] rounded-sm placeholder:text-[18px]"
            />

            <input
              type="text"
              placeholder="Your Email*"
              className=" border-none outline-none bg-gray-100 p-2 w-[340px] rounded-sm placeholder:text-[18px]"
            />
          </div>

          <div className=" flex gap-4">
            <input
              type="number"
              placeholder="Phone Number*"
              className=" border-none mt-4 outline-none bg-gray-100 p-2 w-[340px] rounded-sm placeholder:text-[18px]"
            />

            <input
              type="text"
              placeholder="Subjects*"
              className=" border-none mt-4 outline-none bg-gray-100 p-2 w-[340px] rounded-sm placeholder:text-[18px]"
            />
          </div>

          <div className=" flex flex-col ">
            <textarea
              name=""
              id=""
              cols="67"
              rows="5"
              className=" bg-gray-100 mt-4 p-3 focus:outline-none border-none"
              placeholder="Message"
            ></textarea>

            <button
              className="btn relative inline-flex cursor-pointer  md:mb-0  mt-7 px-6 py-[12px] items-center justify-start overflow-hidden transition-all  bg-amazon_light rounded hover:bg-amazon_light group"
              to="/"
            >
              {/* purple box */}
              <span className="w-0 h-0 rounded  bg-gray-200 absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-150  ease-in-out text-center text-sm font-semibold group-hover:text-black z-10">
                Send Message
              </span>
            </button>
          </div>
        </form>

        <div className=" bg-white shadow-sm h-fit w-fit p-4">
          <div>
            <i class="fa-solid fa-envelope text-2xl animate-bounce "></i>
            <h3 className=" font-semibold text-[20px] text-green-950 text-xl">
              Call or Email Us
            </h3>
            <p className=" text-[17px] text-gray-500">+254 748 789 613</p>
            <p className=" text-[17px] text-gray-500">
              dexsteroxy.1234@gmail.com
            </p>
          </div>

          <div className=" mt-5">
            <i class="fa-solid fa-location-dot text-2xl animate-bounce "></i>
            <h3 className=" font-semibold text-[20px] text-green-950 text-xl">
              Our Location
            </h3>
            <p className=" text-[17px] text-gray-500">
              Sori Bay, Karungu Migori County, Kenya
            </p>
          </div>

          <div className=" mt-6">
            <i class="fa-solid fa-clock text-2xl animate-bounce"></i>
            <h3 className=" font-semibold text-[20px] text-green-950 text-xl">
              Business Hours
            </h3>
            <p className=" text-[17px] text-gray-500">
              Monday – Friday, 8:00 – 15:00 Hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
