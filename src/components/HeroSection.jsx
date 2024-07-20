import React, { useState } from "react";
import NavBar from "./NavBar";
import HeroLaptopImg from "../assets/images/png/hero-laptop.png";
import RoundEllips from "../assets/images/png/hero-round-ellips.png";
import { DownArrow } from "./Icons";
import Swal from "sweetalert2";

function HeroSection() {
  // const popup = () => {
  //   Swal.fire({
  //     title: "Good job!",
  //     text: "Your task has been added !",
  //     icon: "success",
  //     Timer:9000,
  //   });
  // };
  const [email, setEmail] = useState("");
  const popup = () => {
    if (email && isValidEmail(email)) {
      Swal.fire({
        title: "Good job!",
        text: "Your mail has been added!",
        icon: "success",
        timer: 9000,
      });
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-[url('./assets/images/png/hero-bg-img.png')] lg:bg-full bg-cover min-h-screen lg:min-h-[810px] flex flex-col relative">
      <div className="absolute bottom-[-15%] left-[40px] md:block hidden z-10">
        <img className="max-w-[58px]" src={RoundEllips} alt="RoundEllips" />
      </div>
      <div>
        <NavBar />
      </div>
      <div className="lg:pt-32 pt-16 lg:pb-7 pb-5">
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
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Valid Email"
                  className="font-Poppins font-normal text-base text-white70 border border-darkWhite20 bg-transparent py-3.5 px-[18.18px] sm:max-w-[273px] max-sm:w-full w-full outline-none rounded-[8px]"
                />
                <button
                  type="button"
                  onClick={popup}
                  className="font-Poppins font-semibold text-base text-darkWhite py-3.5 px-6 bg-btnBlueGradient rounded-[8px] max-sm:w-full hover:bg-btnBluehover transition-all ease-linear duration-300 text-nowrap"
                >
                  Subscribe For Free NOW
                </button>
              </form>
            </div>
            <div className="lg:w-[50%] px-3 flex justify-end">
              <img
                className="max-w-[515px] lg:h-[528px] lg:object-fill w-full lg:mt-0 mt-10"
                src={HeroLaptopImg}
                alt="HeroLaptopImg"
              />
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <a href="#down">
              <span className="w-[55px] h-[55px] rounded-full bg-blue border border-darkWhite  flex justify-center items-center cursor-pointer">
                <DownArrow />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
