
import { useState } from "react";
import {ProgressBarData} from "../data"
import "../../../Assets/styles/css/components/progress.css"
const ProgressBar = () => {
const [item] = useState(ProgressBarData);

  // const style = {
  //   width: item.load + "%",
  // };
  return (
    <>
  <div className="w-screen bg-white py-20 lg:py-2">


  <div className=" flex justify-center items-center container lg:px-48 py-6">
    
 <div className=" w-full lg:p-4">
 <div className=" grid grid-flow-row-dense grid-cols-3 lg:grid-rows-2 grid-rows-6 gap-2 ">
    {item.map((item) => (
    <div dir="ltr" className="lg:col-span-1 col-span-3">
      <div className="progress-title text-black mt-2">{item.title}</div>
      <div className="progress lg:h-24 h-32  progress-bg relative bg-black">
        <div className="absolute">
          <div className="end-progress lg:h-24 h-32"></div>
        </div>
        <div className="relative during-progress flex justify-center items-center lg:h-24 h-32" style={{ width: item.load + "%",}}>
          <h2 className="precentage-txt font-bold text-4xl">{item.load}%</h2>
        </div>
      </div>
    </div>
    ))}
    </div>
 </div>
  </div>
  </div>
    </>
  );
};

export default ProgressBar;
