import React from "react";
import IntelligenceHubImg1 from "../assets/images/png/intelligenceHub-1.png";
import IntelligenceHubImg2 from "../assets/images/png/intelligenceHub-2.png";
import IntelligenceHubImg3 from "../assets/images/png/intelligenceHub-3.png";
import IntelligenceHubEllip from "../assets/images/png/hub-right-ellip.png";
import LeftEllip from '../assets/images/png/left-roundedEllip.png'

function IntelligenceHub() {
  return (
    <div
      id="down"
      className="bg-bodyBlue mt-[-2px] xl:pt-40 xl:pb-44 lg:py-28 md:py-16 py-10 relative"
    >
      {/* ====rightEllip====== */}
      <div className="absolute right-0 top-[-1%] md:block hidden">
        <img
          className="w-full h-[555px]"
          src={IntelligenceHubEllip}
          alt="IntelligenceHubEllip"
        />
      </div>
      {/* ======leftEllip====== */}
      <div className="absolute bottom-[-17%] left-[-32px]">
        <img className="max-w-[821px] h-[555px]" src={LeftEllip} alt="LeftEllip " />
      </div>
      <div className="container px-3">
        <h2 className="font-khula font-bold lg:text-5xl text-4xl lg:leading-[57.6px] leading-[35px] text-darkWhite lg:pb-20 md:pb-14 pb-7 text-center">
          Your All-in-One Market{" "}
          <span className="lg:block">Intelligence Hub</span>
        </h2>
        <div className="flex flex_wrap gap-[30px] justify-center">
          <div className="max-w-[360px] w-full border_Gradient after:hover:[background:linear-gradient(147.49deg,#2DE2FB_7.04%,#1B4EC8_59.53%)border-box] relative after:border after:border-darkWhite8 after:absolute after:inset-0 after:rounded-[12px] group hover:shadow-CardShadaw transition-all duration-300">
            <div className="bg-btnBlueGradient w-[265px] h-[89px] absolute opacity-65 blur-3xl bottom-[50%] top-[50%] rounded-[50%] right-[11%] group-hover:hidden"></div>
            <img
              className="max-w-[360px] w-full rounded-t-[12px]"
              src={IntelligenceHubImg1}
              alt="IntelligenceHubImg1"
            />
            <p className="font-khula font-semibold text-xl text-darkWhite md:py-6 md:px-5 p-3">
              Daily Full Market Report and Main News Summarizer
            </p>
            <div className="border border-darkWhite8 w-full"></div>
            <p className="font-Poppins font-normal text-base leading-7 text-darkWhite70 md:pt-4 md:pb-6 md:px-5 p-3">
              Stay informed with daily updates on major markets and concise news
              summaries to make quick, informed decisions.
            </p>
          </div>
          <div className="max-w-[360px] w-full border_Gradient after:hover:[background:linear-gradient(147.49deg,#2DE2FB_7.04%,#1B4EC8_59.53%)border-box] relative after:border after:border-darkWhite8 after:absolute after:inset-0 after:rounded-[12px] group hover:shadow-CardShadaw transition-all duration-300">
            <div className="bg-btnBlueGradient w-[265px] h-[89px] absolute opacity-65 blur-3xl bottom-[50%] top-[50%] rounded-[50%] right-[11%] group-hover:hidden"></div>
            <img
              className="max-w-[360px] rounded-t-[12px] w-full"
              src={IntelligenceHubImg2}
              alt="IntelligenceHubImg2"
            />
            <p className="font-khula font-semibold text-xl text-darkWhite md:py-6 md:px-5 p-3">
              Weekly and Monthly Full Market Overview Analysis
            </p>
            <div className="border border-darkWhite8 w-full"></div>
            <p className="font-Poppins font-normal text-base leading-7 text-darkWhite70 md:pt-4 md:pb-6 md:px-5 p-3">
              Get the big picture with detailed weekly and monthly market
              overviews, helping you spot trends and plan ahead.
            </p>
          </div>
          <div className="max-w-[360px] w-full border_Gradient after:hover:[background:linear-gradient(147.49deg,#2DE2FB_7.04%,#1B4EC8_59.53%)border-box] relative after:border after:border-darkWhite8 after:absolute after:inset-0 after:rounded-[12px] group hover:shadow-CardShadaw transition-all duration-300">
            <div className="bg-btnBlueGradient w-[265px] h-[89px] absolute opacity-65 blur-3xl bottom-[50%] top-[50%] rounded-[50%] right-[11%] group-hover:hidden"></div>
            <img
              className="max-w-[360px] rounded-t-[12px] w-full"
              src={IntelligenceHubImg3}
              alt="IntelligenceHubImg3"
            />
            <p className="font-khula font-semibold text-xl text-darkWhite md:pt-6 md:pb-[52px] md:px-5 p-3">
              Sample of a Premium Signal
            </p>
            <div className="border border-darkWhite8 w-full"></div>
            <p className="font-Poppins font-normal text-base leading-7 text-darkWhite70 md:pt-4 md:pb-6 md:px-5 p-3">
              Access high-quality premium signals to enhance your trading
              strategy and boost your investment returns.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:mt-[60px] md:mt-[50px] mt-[25px]">
          <button className="font-Poppins font-semibold text-base text-darkWhite bg-btnBlueGradient py-3.5 px-6 rounded-[8px] hover:bg-btnBluehover transition duration-300 ease-linear text-nowrap">
            Get Free Access Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntelligenceHub;
