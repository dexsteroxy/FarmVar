// import React from "react";
// import { useState, useEffect } from "react";
// import logo from "../assets/kc.png";
// import { Link } from "react-scroll";

// // https://www.youtube.com/watch?v=f0J1dSqXeDc&list=PL391NzrHDDl9HTJeHzUgOqG1sAQv_-rzT&index=3
// const Navbar = () => {
//   const [scroll, setScroll] = useState(false);
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScroll(true);
//     } else {
//       setScroll(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scroll]);
//   return (
//     <div className="">
//       <div
//         className={
//           scroll
//             ? "h-16 w-full fixed flex transition items-center justify-between ease-in-out duration-700 shadow-md  bg-white  px-12 z-20"
//             : " bg-transparent px-12 h-16 w-full bg-white fixed justify-between transition ease-in-out duration-700 flex items-center z-20"
//         }
//       >
//         {/* logo */}

//         <div>
//           <img src={logo} className=" h-52 -mt-12" alt="logo-img" />
//         </div>
//         {/* menu Items */}

//         <div className=" hidden relative mdl:flex space-x-6 lg:mr-12 ">
//           <Link
//             to="/home"
//             spy={true}
//             smooth={true}
//             hashSpy={true}
//             offset={50}
//             duration={500}
//             isDynamic={true}
//             ignoreCancelEvents={false}
//             spyThrottle={500}
//             className=" cursor-pointer text-[18px] font-poppins font-medium transition duration-500"
//           >
//             Home
//           </Link>

//           <Link
//             to="/about"
//             spy={true}
//             smooth={true}
//             hashSpy={true}
//             offset={50}
//             duration={500}
//             isDynamic={true}
//             ignoreCancelEvents={false}
//             spyThrottle={500}
//             className=" cursor-pointer text-[18px] font-poppins font-medium   transition duration-500"
//           >
//             About Us
//           </Link>

//           <div className=" absolute top-[55px] left-10 bg-white h-32 w-32 me">
//             <ul>
//               <li className="border-b-[1px] border-gray-200 pl-3 text-[17px] font-normal text-gray-700 py-2 cursor-pointer hover:border-b-2 transition ease-in-out duration-500 hover:border-amazon_blue font-poppins">
//                 <Link>About Farm</Link>
//               </li>

//               <li className="border-b-[1px] border-gray-200 pl-3 text-[17px] font-normal text-gray-700 py-2 cursor-pointer hover:border-b-2 transition ease-in-out duration-500 hover:border-amazon_blue font-poppins">
//                 <Link>About Farm</Link>
//               </li>

//               <li className="border-b-[1px] border-gray-200 pl-3 text-[17px] font-normal text-gray-700 py-2 cursor-pointer hover:border-b-2 transition ease-in-out duration-500 hover:border-amazon_blue font-poppins">
//                 <Link>About Farm</Link>
//               </li>
//             </ul>
//           </div>

//           <Link
//             to="/service"
//             spy={true}
//             smooth={true}
//             hashSpy={true}
//             offset={50}
//             duration={500}
//             isDynamic={true}
//             ignoreCancelEvents={false}
//             spyThrottle={500}
//             className=" cursor-pointer text-[18px] font-poppins font-medium   transition duration-500 "
//           >
//             Services
//           </Link>

//           <Link
//             to="/contact"
//             spy={true}
//             smooth={true}
//             hashSpy={true}
//             offset={50}
//             duration={500}
//             isDynamic={true}
//             ignoreCancelEvents={false}
//             spyThrottle={500}
//             className=" cursor-pointer text-[18px] transition duration-500 font-poppins font-medium  "
//           >
//             Contact us
//           </Link>
//         </div>

//         {/* mobile nav */}

//         <div className=" mdl:hidden flex-col  flex space-x-6 lg:mr-12 ">
//           <i className="fa-solid fa-bars"></i>
//           {/* <Link
//               to="/home"
//               spy={true}
//               smooth={true}
//               hashSpy={true}
//               offset={50}
//               duration={500}
//               isDynamic={true}
//               ignoreCancelEvents={false}
//               spyThrottle={500}
//               className=" cursor-pointer text-[18px] font-poppins font-medium transition duration-500"
//             >
//               Home
//             </Link>

//             <Link
//               to="/about"
//               spy={true}
//               smooth={true}
//               hashSpy={true}
//               offset={50}
//               duration={500}
//               isDynamic={true}
//               ignoreCancelEvents={false}
//               spyThrottle={500}
//               className=" cursor-pointer text-[18px] font-poppins font-medium   transition duration-500"
//             >
//               About Us
//             </Link>

//             <Link
//               to="/service"
//               spy={true}
//               smooth={true}
//               hashSpy={true}
//               offset={50}
//               duration={500}
//               isDynamic={true}
//               ignoreCancelEvents={false}
//               spyThrottle={500}
//               className=" cursor-pointer text-[18px] font-poppins font-medium   transition duration-500 "
//             >
//               Services
//             </Link>

//             <Link
//               to="/contact"
//               spy={true}
//               smooth={true}
//               hashSpy={true}
//               offset={50}
//               duration={500}
//               isDynamic={true}
//               ignoreCancelEvents={false}
//               spyThrottle={500}
//               className=" cursor-pointer text-[18px] transition duration-500 font-poppins font-medium  "
//             >
//               Contact us
//             </Link> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;









import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kc.png";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const toggleAboutMenu = () => {
    setShowAboutMenu(!showAboutMenu);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div
        className={
          scroll
            ? "h-16 w-full fixed flex transition items-center justify-between ease-in-out duration-700 shadow-md bg-white px-12 z-50"
            : " bg-transparent px-12 h-16 w-full bg-white fixed justify-between transition ease-in-out duration-700 flex items-center z-20"
        }
      >
        <div>
          <img src={logo} className="h-52 -mt-12" alt="logo-img" />
        </div>

        <div className="hidden relative mdl:flex space-x-6 lg:mr-12 ">
          <Link
            to="/"
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer text-[18px] mt-[2px] font-poppins font-medium transition duration-500"
          >
            Home
          </Link>

          <div
            onMouseEnter={toggleAboutMenu}
            onMouseLeave={toggleAboutMenu}
            className="relative"
          >
            <span className="cursor-pointer text-[18px] font-poppins font-medium transition duration-700 ease-in-out">
              About Us
            </span>

            {showAboutMenu && (
              <div className="absolute top-[px] -left-7 bg-white shadow-sm shadow-amazon_blue z-20 h-32 w-44 me transition duration-700 ease-in-out">
                <ul>
                  <li className="border-b-[1px] border-gray-200 pl-3 text-[15px] font-normal text-gray-500 py-2 cursor-pointer hover:border-b-2 transition ease-in-out duration-500 hover:border-amazon_blue font-poppins">
                    <Link to="aboutfarm">About Farm</Link>
                  </li>

                  <li className="border-b-[1px] border-gray-200 pl-3 text-[15px] font-normal text-gray-500 py-2 cursor-pointer hover:border-b-2 transition ease-in-out duration-500 hover:border-amazon_blue font-poppins">
                    <Link to="aboutteam">About Team</Link>
                  </li>

                  <li className="border-b-[1px] border-gray-200 pl-3 text-[15px] font-normal text-gray-500 py-2 cursor-pointer hover:border-b-2 transition ease-in-out duration-500 hover:border-amazon_blue font-poppins">
                    <Link to="aboutmission">About Mission</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            onMouseEnter={toggleSubMenu}
            onMouseLeave={toggleSubMenu}
            className="relative"
          >
            <span className="cursor-pointer text-[18px] font-poppins font-medium transition duration-500">
            Services
            </span>

            {showSubMenu && (
              <div className="absolute top-[px] -left-7 bg-white shadow-sm shadow-amazon_blue z-20 h-32 w-48 me">
                <ul>
                  <li className="border-b-[1px] border-gray-200 pl-3 text-[15px] font-normal text-gray-500 py-2 cursor-pointer hover:border-b-2 transition ease-in-out duration-500 hover:border-amazon_blue font-poppins">
                    <Link to="/cage">Cage Installation</Link>
                  </li>

                  <li className="border-b-[1px] border-gray-200 pl-3 text-[15px] font-normal text-gray-500 py-2 cursor-pointer hover:border-b-2 transition ease-in-out duration-500 hover:border-amazon_blue font-poppins">
                    <Link to="/feed">Feeds Training</Link>
                  </li>

                  <li className="border-b-[1px] border-gray-200 pl-3 text-[15px] font-normal text-gray-500 py-2 cursor-pointer hover:border-b-2 transition ease-in-out duration-500 hover:border-amazon_blue font-poppins">
                    <Link to="/apptech">App Technology</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer text-[18px] mt-1 transition duration-500 font-poppins font-medium"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

