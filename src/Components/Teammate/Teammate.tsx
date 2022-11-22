import ImageBox from "./Components/ImageBox/ImageBox";
import UserText from "./Components/UserText/UserText";

function Teammate (){
    return (
        <>
      <div className="flex flex-col lg:flex-row justify-between container">
      <div>
       <ImageBox />
       </div>
          <div className="lg:ml-16 ml-0 mt-16 lg:mt-0">
              <UserText />
          </div>
     
      </div>
      <div className="container">

      </div>
        </>
    )
}

export default Teammate;