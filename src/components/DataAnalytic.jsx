import React from "react";
import { Data } from "../common/Helper";

function DataAnalytic() {
  return (
    <div>
      <div className="container">
        {Data.map((obj, index) => (
          <div key={index}>
            <div className="">
                <img src={obj.img} alt="dataImg1 " />
                    <h5>{obj.heading}</h5>
                    <p>{obj.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataAnalytic;
