import React from "react";
import IntelligenceHubEllip from "../assets/images/webp/hub-right-ellip.webp";
import LeftEllip from "../assets/images/webp/left-roundedEllip.webp";
import { HubData } from "../common/Helper";

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
        <img
          className="max-w-[821px] h-[555px]"
          src={LeftEllip}
          alt="LeftEllip "
        />
      </div>
      <div className="container px-3">
        <h2 className="font-khula font-bold lg:text-5xl text-4xl lg:leading-[57.6px] leading-[35px] text-darkWhite lg:pb-20 md:pb-14 pb-7 text-center">
          Your All-in-One Market{" "}
          <span className="lg:block">Intelligence Hub</span>
        </h2>
        <div data-aos="fade-up" className="flex flex_wrap gap-7 justify-center">
          {HubData.map((obj, index) => (
            <div key={index}>
              <div className="lg:max-w-[360px] max-w-80 w-full lg:min-h-[460px] min-h-[400px] border_Gradient after:hover:[background:linear-gradient(147.49deg,#2DE2FB_7.04%,#1B4EC8_59.53%)border-box] relative after:border after:border-darkWhite8 after:absolute after:inset-0 after:rounded-[12px] group hover:shadow-CardShadaw transition-all duration-300">
                {/* =====card-gridentEllip==== */}
                <div className="bg-btnBlueGradient w-[265px] h-[89px] absolute opacity-55 blur-[72px] bottom-[50%] top-[50%] rounded-[50%] right-[11%] group-hover:hidden"></div>
                <img
                  className="lg:max-w-[360px] max-w-80 w-full rounded-t-[12px]"
                  src={obj.HubImg1}
                  alt="HubImg1"
                />
                <h6
                  className={`font-khula font-semibold lg:text-xl text-lg text-darkWhite lg:py-6 py-3 lg:px-5 px-3 ${
                    index === HubData.length - 1 ? "lg:pb-[52px]" : ""
                  }`}
                >
                  {obj.heading}
                </h6>
                <div className="border border-darkWhite8 w-full"></div>
                <p className="font-Poppins font-normal text-base leading-7 text-darkWhite70 lg:pt-4 lg:pb-6 py-3 lg:px-5 px-3">
                  {obj.para}
                </p>
              </div>
            </div>
          ))}
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
