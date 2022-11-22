import ImageBox from "./Components/ImageBox/ImageBox";
import UserText from "./Components/UserText/UserText";
import images from "src/Importer/Importer";


function Teammate (){


    return (
        <>
       

      <div className="flex flex-col lg:flex-row justify-between container mt-16">
      <div>
       <ImageBox />
       </div>
          <div className="lg:ml-16 ml-0 mt-16 lg:mt-0">
              <UserText />
          </div>
     
      </div>
      <div className="container my-16 " dir="rtl">
      <p className="font-bold  text-4xl py-16 px-10">علاقه مندی ها</p>

      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2">
<img src={images['Teammate/1.png']} alt="" className="col-span-2 w-full" />
<img src={images['Teammate/2.png']} alt="" className=" w-full col-span-1" />
<img src={images['Teammate/3.png']} alt="" className="col-span-1 w-full" />
<img src={images['Teammate/4.png']} alt="" className="col-span-2 w-full" />

</div>
      </div>
        </>
    )
}

export default Teammate;