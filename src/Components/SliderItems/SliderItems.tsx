import "./style.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface ISliderItemType {
  imageSource: string;
  slidertxt: string;
  route: string;
}
const SliderItems = (props: ISliderItemType) => {
  return (
    <>
      <div className="flex flex-col" dir="rtl">
        <img
          src={props.imageSource}
          alt={props.slidertxt}
          className="w-full h-80"
        />

        <div className=" flex  py-4 px-2  items-center justify-between w-4/5 -mt-7 h-16">
          <Button route="/" btnType="initialize" btntxt={props.slidertxt} />
        </div>
      </div>
    </>
  );
};

export default SliderItems;
