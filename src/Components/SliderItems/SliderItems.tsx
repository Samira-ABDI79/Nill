
import "./style.css"
import { Link } from "react-router-dom";

interface ISliderItemType{
    imageSource: string;
    slidertxt: string;
    route: string;
}
const SliderItems = (props: ISliderItemType) => {
  return (
    <>
      <div className="flex flex-col" dir="rtl">
        <img src={props.imageSource} alt={props.slidertxt} className="w-full h-80"/>
     
           <div className=" flex blueButton py-4 px-2  items-center justify-between w-4/5 -mt-7 h-16">
                <button className="font-bold"><Link to={props.route}>{props.slidertxt}</Link></button>
       <div>
     
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

       </div></div>
        
      </div>
    </>
  );
};

export default SliderItems;