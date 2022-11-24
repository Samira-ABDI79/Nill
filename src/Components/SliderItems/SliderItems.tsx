
import "./style.css"

interface ISliderItemType{
    imageSource: string;
    slidertxt: string;
}
const SliderItems = (props: ISliderItemType) => {
  return (
    <>
      <div className="" dir="rtl">
        <img src={props.imageSource} alt={props.slidertxt} className=""/>
     
           <div className=" flex blueButton py-3 px-2 w-32 items-center justify-between">
                <button className="">{props.slidertxt}</button>
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