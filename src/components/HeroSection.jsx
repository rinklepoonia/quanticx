import React from "react";
import NavBar from "./NavBar";
import HeroLaptopImg from "../assets/images/png/hero-laptop.png";
import { DownArrow } from "./Icons";

function HeroSection() {
  return (
    <div className="bg-[url('./assets/images/png/hero-bg-img.png')] bg-full min-h-screen flex flex-col">
      <div>
        <NavBar />
      </div>
      <div className="grow flex items-center">
        <div className="container px-3">
          <div className="row justify-center">
            <div className="lg:w-[50%] px-3">
              <h1 className="font-khula font-bold lg:text-6xl sm:text-5xl text-4xl lg:leading-[66px] sm:leading-[49px] leading-[40px] text-darkWhite">
                Gain an Edge in{" "}
                <span className="lg:block">Forex Trading with</span>{" "}
                <span className="lg:block">AI-Powered</span> Signals
              </h1>
              <p className="font-Poppins font-normal text-xl text-white lg:pt-4 pt-2">
                Unlock Market Insights with Advanced Technology
              </p>
              <form
                action=""
                className="flex flex-wrap items-center gap-5 lg:mt-[60px] sm:mt-[40px] mt-[30px]"
              >
                <input
                  required
                  type="email"
                  placeholder="Enter Your Valid Email"
                  className="font-Poppins font-normal text-base text-white70 border border-darkWhite20 bg-transparent py-3.5 px-[18.18px] max-w-[273px] w-full outline-none rounded-[8px]"
                />
                <button className="font-Poppins font-semibold text-base text-darkWhite py-3.5 px-6 bg-btnBlueGradient rounded-[8px] hover:bg-btnBluehover transition-all ease-linear duration-300 text-nowrap">
                  Subscribe For Free NOW
                </button>
              </form>
            </div>
            <div className="lg:w-[50%] px-3">
              <img
                className="max-w-[515px] w-full lg:mt-0 mt-10"
                src={HeroLaptopImg}
                alt="HeroLaptopImg"
              />
            </div>
          </div>
          <div className="flex justify-center mt-20">
              <span className="w-[55px] h-[55px] rounded-full bg-blue border border-darkWhite  flex justify-center items-center">
                <DownArrow />
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
