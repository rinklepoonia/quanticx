import React, { useRef, useState } from 'react'
import { AccordianData } from '../common/Helper'
import {AccTopArrow,AccBottomArrow} from '../components/Icons'


const AccordionItem = ({ accHeading, accPara , isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div
      className={`overflow-hidden mb-6 ${
        isOpen ? "" : "border-b border-white32"
      }`}
    >
      <button
        className={`w-full text-left sm:py-4 py-3 px-3 flex items-center justify-between cursor-pointer ${
          isOpen ? "active" : ""
        }`}
        onClick={onClick}
      >
        <p className="font-khula font-semibold sm:text-xl text-base text-white">
          {accHeading}
        </p>
        <span>{isOpen ? <AccTopArrow /> : <AccBottomArrow />}</span>
      </button>
      <div
        ref={contentHeight}
        className="transition-all duration-300 ease-linear"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer-content font-Poppins font-normal sm:text-base text-sm text-darkWhite70 px-3 max-w-[484px]">
          {accPara}
        </p>
      </div>
    </div>
  );
};

function Accordian() {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

  return (
    <div className="bg-bodyBlue mt-[-1px] lg:py-44 md:py-24 sm:py-14 py-10">
      <div className="container px-3">
        <div className="row max-lg:justify-center">
          <div className="lg:w-[50%] w-full px-3">
            <h2 className="font-khula font-bold lg:text-5xl md:text-4xl text-3xl lg:leading-[57.6px] leading-[35px] text-darkWhite xl:pb-4 pb-2 max-lg:text-center">
              FAQs
            </h2>
            <p className="font-Poppins font-normal text-base text-darkWhite70 lg:max-w-[345px] max-lg:text-center">
              Viverra elit at nunc sed sed nunc quisque consectetur. Lorem
              vulputate amet ut senectus felis amet lacus rhoncus quisque.
              Tortor id arcu quam dis odio.
            </p>
          </div>
          <div className="lg:w-[50%] w-full px-3 mt-lg-0 mt-9">
            {AccordianData.map((item, index) => (
              <AccordionItem
                key={index}
                accHeading={item.accHeading}
                accPara={item.accPara}
                isOpen={activeIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian