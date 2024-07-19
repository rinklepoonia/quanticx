import React, { useState } from "react";
import navlogo from "../assets/images/png/nav-logo.png";
import { Cross, Threeline } from "../components/Icons";

function NavBar() {
  const [nav, setnav] = useState(false);
  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <div className="">
      <div className="container px-3">
        <div className="flex h-[100px] items-center justify-between">
          <a href="">
            {" "}
            <img className="max-w-[191px]" src={navlogo} alt="navlogo" />
          </a>
          <div className="flex items-center gap-[26px]">
            <ul
              className={`${
                nav ? "right_0" : "right_100"
              } flex items-center xl:gap-6 gap-5 mobile-view`}
            >
              <li>
                <a
                  href=""
                  onClick={() => !nav}
                  className="font-Poppins font-normal text-base text-lightwhite hover:text-darkWhite transition duration-300 ease-linear"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => setnav(!nav)}
                  href=""
                  className="font-Poppins font-normal text-base text-lightwhite hover:text-darkWhite transition duration-300 ease-linear text-nowrap"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => setnav(!nav)}
                  href=""
                  className="font-Poppins font-normal text-base text-lightwhite hover:text-darkWhite transition duration-300 ease-linear text-nowrap"
                >
                  Products & Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => setnav(!nav)}
                  href=""
                  className="font-Poppins font-normal text-base text-lightwhite hover:text-darkWhite transition duration-300 ease-linear text-nowrap"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  onClick={() => setnav(!nav)}
                  href=""
                  className="font-Poppins font-normal text-base text-lightwhite hover:text-darkWhite transition duration-300 ease-linear text-nowrap"
                >
                  FAQs & Support
                </a>
              </li>
              <li>
                <a
                  onClick={() => setnav(!nav)}
                  href=""
                  className="font-Poppins font-normal text-base text-lightwhite hover:text-darkWhite transition duration-300 ease-linear text-nowrap"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <button className="font-Poppins font-semibold text-base text-darkWhite bg-btnBlueGradient py-3.5 px-6 rounded-[8px] hover:bg-btnBluehover transition duration-300 ease-linear text-nowrap max-lg:block hidden">
                  Contact Us
                </button>
              </li>
            </ul>
            <button className="font-Poppins font-semibold text-base text-darkWhite bg-btnBlueGradient py-3.5 px-6 rounded-[8px] hover:bg-btnBluehover transition duration-300 ease-linear text-nowrap lg:block hidden">
              Contact Us
            </button>
          </div>
          <div className="z-10 lg:hidden" onClick={() => setnav(!nav)}>
            {nav === false ? <Threeline /> : <Cross />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
