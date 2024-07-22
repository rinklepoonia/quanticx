import React from "react";
import { Data } from "../common/Helper";

function DataAnalytic() {
  return (
    <div className="bg-bodyBlue mt-[-1px] md::py-0 py-5">
      <div className="container xl:px-0 px-3">
        <h2 className="font-khula font-bold lg:text-5xl md:text-4xl text-3xl lg:leading-[57.6px] leading-[35px] text-darkWhite xl:pb-4 pb-2 max-xl:text-center">
          Powered by Advanced <span className="lg:block">Data Analytics</span>
        </h2>
        <p className="font-Poppins font-normal text-xl leading-8 text-white xl:pb-[60px] md:pb-10 pb-5 max-xl:text-center">
          Our bot doesn't just predict - it analyzes, adapts, and evolves
        </p>
        <div className="flex flex-wrap justify-center gap-6 xl:pb-24 sm:pb-14 pb-6">
          {/* ====map-cards==== */}
          {Data.map((obj, index) => (
            <div
              key={index}
              className={index >= Data.length - 4 ? "xl:mt-4 mt-0" : ""}
            >
              <div
                className={`bg-blue max-w-[267px] min-h-[288px] px-5 pt-7 pb-5 flex justify-center flex-col items-center rounded-xl relative  ${
                  index >= Data.length - 2
                    ? "border border-btnBlueGradient"
                    : ""
                }`}
              >
                <div
                  className={`flex items-center rounded-2xl gap-1.5 py-1 px-12 absolute top-[-18px] ${
                    index >= Data.length - 2 ? "bg-btnBlueGradient" : ""
                  }`}
                >
                  {obj.premiumBtn && (
                    <button className="font-Poppins font-normal text-base text-white">
                      {obj.premiumBtn}
                    </button>
                  )}
                  {obj.dimondImg && (
                    <img
                      className="w-4"
                      src={obj.dimondImg}
                      alt="PremiumDimondImg"
                    />
                  )}
                </div>
                <div className="w-[265px] h-[89px] bg-btnBlueGradient opacity-15 absolute blur-2xl top-12 left-0"></div>
                <div className="w-20 h-20 bg-cardGradient rounded-full flex justify-center items-center">
                  <img className="max-w-[48px]" src={obj.img} alt="dataImg1 " />
                </div>
                <h5 className="font-khula font-semibold text-2xl leading-7 text-darkWhite pt-5 text-center">
                  {obj.heading.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h5>
                <p className="font-Poppins font-normal text-base text-white70 text-center pt-2">
                  {obj.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex max-xl:justify-center max-xl:items-center">
          <button className="font-Poppins font-semibold sm:text-base text-sm text-darkWhite sm:py-3.5 py-2 sm:px-6 px-4 bg-btnBlueGradient rounded-[8px] hover:bg-btnBluehover transition-all ease-linear duration-300 text-nowrap">
            Start Receiving Data-Driven Insights Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DataAnalytic;
