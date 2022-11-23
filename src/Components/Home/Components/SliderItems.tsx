import images from "../../../Importer/Importer";

import Button from "../../Button/Button"
interface ISliderItemType{
    imageSource: string;
    slidertxt: string;
}
const SliderItems = (props: ISliderItemType) => {
  return (
    <>
      <div className="flex relative flex-col">
        <img src={props.imageSource} alt={props.slidertxt} className="w-44"/>
        <div className="absolute bottom-65 right-0">
            <Button btnType="initialize" btntxt={props.slidertxt} />
       
        </div>
      </div>
    </>
  );
};

export default SliderItems;