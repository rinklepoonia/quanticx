import React from "react";
import { WhatWeCards } from "../common/Helper";

function WhatWe() {
  return (
    <div className="bg-bodyBlue mt-[-2px] pb-10">
      <div className="container px-3">
        <h2 className="font-khula font-bold lg:text-5xl md:text-4xl text-3xl lg:leading-[57.6px] leading-[35px] text-darkWhite xl:pb-4 pb-2 text-center">
          What we do
        </h2>
        <p className="font-Poppins font-normal text-base text-darkWhite70 text-center pb-14">
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
            <div className="lg:w-[33.33%] md:w-[50%] w-full px-3 justify-center flex pt-8">
              <div key={index}>
                <div
                  className={` ${
                    index === 0 || index === 3 || index === 4 || index === 5
                      ? "pt-0 pb-10"
                      : ""
                  } bg-blue max-w-[360px] min-h-[460px] rounded-xl py-10 px-11 flex flex-col justify-center items-center`}
                >
                  <img
                    className={` ${index === 5 || index===4 ? "h-[160px]" : ""} w-[153px]`}
                    src={obj.img}
                    alt="chatBotImg"
                  />
                  <h5
                    className={` ${
                      index === 0 || index === 3 || index === 4 || index === 5
                        ? "pt-10"
                        : ""
                    } font-khula font-semibold text-2xl leading-7 text-darkWhite py-6 pb-2`}
                  >
                    {obj.heading}
                  </h5>
                  <p
                    className={`font-Poppins font-normal text-base text-darkWhite70 text-center ${
                      index === 0 || index === 3 || index === 4
                        ? "pb-11"
                        : index === 1 || index === 2 || index===5
                        ? "pb-7"
                        : ""
                    }`}
                  >
                    {obj.para}
                  </p>
                  <button className="font-Poppins font-semibold text-base text-darkWhite bg-btnBlueGradient py-3.5 px-6 rounded-lg">
                    {obj.button}
                  </button>
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
