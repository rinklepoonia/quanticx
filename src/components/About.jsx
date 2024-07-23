import React from "react";
import AboutUsImg from "../assets/images/webp/about-us-img.webp";
import AboutEllip from '../assets/images/webp/about-us-ellip.webp'

function About() {
  return (
    <div
      id="about"
      className="bg-bodyBlue lg:py-44 md:py-24 sm:py-14 py-10 mt-[-2px] relative"
    >
      <div className="absolute right-0 top-0">
        <img
          className="max-w-[801px] h-[585px]"
          src={AboutEllip}
          alt="AboutEllip"
        />
      </div>
      <div className="container px-3">
        <div className="row lg:flex-row flex flex-col-reverse items-center">
          <div
            data-aos="fade-right"
            className="lg:w-[50%] w-full px-3 flex justify-center lg:mt-0 mt-5"
          >
            <img
              className="lg:max-w-[500px] max-w-96 w-full"
              src={AboutUsImg}
              alt="AboutUsImg"
            />
          </div>
          <div
            data-aos="fade-left"
            className="lg:w-[50%] w-full px-3  pb-lg-0 pb-5"
          >
            <h2 className="font-khula font-bold lg:text-5xl text-4xl lg:leading-[57.6px] leading-[35px] text-darkWhite lg:pb-4 sm:pb-2 pb-1 max-lg:text-center">
              About us
            </h2>
            <p className="font-Poppins font-normal text-base leading-7 text-darkWhite70 lg:max-w-[560px] lg:pb-9 sm:pb-5 pb-3 max-lg:text-center">
              Welcome to QuanticX, where the future of trading has already
              arrived. We are a groundbreaking fintech startup, pushing the
              boundaries of what's possible in the trading and investment world.
              By blending cutting-edge artificial intelligence with robust
              statistical models, we're not just joining the revolution, we're
              leading it. <br />
              Our Vision: QuanticX emerged from the idea that advanced trading
              strategies shouldn't be a luxury for a select few, but a resource
              for many. In line with this vision, we've democratized access to
              premium trading technology and strategies, enabling individuals
              and organizations alike to chart their financial futures with
              confidence and precision.
            </p>

            <div className="flex max-lg:justify-center">
              <button className="font-Poppins font-semibold text-base text-darkWhite bg-btnBlueGradient py-3.5 px-6 rounded-[8px] hover:bg-btnBluehover transition duration-300 ease-linear text-nowrap">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
