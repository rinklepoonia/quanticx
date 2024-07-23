import React from "react";
import { WhatWeCards } from "../common/Helper";
import leftEllip from "../assets/images/webp/WhatWeDo-leftEllip.webp";

function WhatWe() {
  return (
    <div id="services" className="bg-bodyBlue mt-[-3px] lg:pb-0 pb-10 relative">
      {/* ====leftEllip===== */}
      <div className="absolute top-[-5%] left-0 lg:block hidden">
        <img
          className="max-w-[821px] h-[555px]"
          src={leftEllip}
          alt="leftEllip"
        />
      </div>
      <div className="container px-3">
        <h2 className="font-khula font-bold lg:text-5xl text-4xl  lg:leading-[57.6px] leading-[35px] text-darkWhite xl:pb-4 pb-2 text-center">
          What we do
        </h2>
        <p className="font-Poppins font-normal text-base text-darkWhite70 text-center xl:pb-14 lg:pb-8 md:pb-3 pb-1">
          Viverra elit at nunc sed sed nunc quisque consectetur. Lorem vulputate
          amet ut{" "}
          <span className="lg:block">
            senectus felis amet lacus rhoncus quisque. Tortor id arcu quam dis
            odio.
          </span>
        </p>
        {/* =====map-card==== */}
        <div className="row">
          {WhatWeCards.map((obj, index) => (
            <div
              key={index}
              className={`lg:w-[33.33%] md:w-[50%] w-full px-3 justify-center items-end flex pt-8 ${
                index === 3 || index === 4 || index === 5 ? "lg:mb-2" : ""
              }`}
            >
              <div data-aos="zoom-in">
                <div
                  className={` ${
                    index === 0 || index === 3 || index === 4 || index === 5
                      ? "pt-0 pb-10"
                      : ""
                  }
                   bg-blue max-w-[360px] lg:min-h-[460px] min-h-[385px] rounded-xl py-10 px-11 max-lg:p-5 flex flex-col items-center border_Gradient after:hover:[background:linear-gradient(147.49deg,#2DE2FB_7.04%,#1B4EC8_59.53%)border-box] after:border after:border-darkWhite8 after:absolute after:inset-0 after:rounded-[12px] hover:shadow-CardShadaw transition-all duration-300 group`}
                >
                  <img
                    className={` ${
                      index === 5 || index === 4 ? "h-[160px]" : ""
                    } w-[153px]`}
                    src={obj.img}
                    alt="chatBotImg"
                  />
                  {/*===== card-ellip ====*/}
                  <div className="w-[265px] h-[89px] bg-btnBlueGradient opacity-15 absolute blur-2xl top-12 left-6 group-hover:hidden block"></div>
                  <div className="h-full grow flex flex-col items-center justify-end z-10">
                    <h5
                      className={`font-khula font-semibold text-2xl leading-7 text-darkWhite pb-2 text-center capitalize`}
                    >
                      {obj.heading}
                    </h5>
                    <p
                      className={`font-Poppins font-normal text-base text-darkWhite70 text-center lg:min-h-[116px] ${
                        index === 0 || index === 3 || index === 4
                          ? "lg:pb-11 pb-5"
                          : index === 1
                          ? "lg:pb-7 pb-5"
                          : index === 2 || index === 5
                          ? "lg:pb-[54px] pb-5"
                          : ""
                      }`}
                    >
                      {obj.para}
                    </p>
                    <button className="font-Poppins font-semibold text-base text-darkWhite bg-btnBlueGradient hover:bg-btnBluehover py-3.5 px-6 rounded-lg transition-all duration-300">
                      {obj.button}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWe;
