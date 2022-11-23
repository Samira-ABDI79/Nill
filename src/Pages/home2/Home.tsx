import React, { useState} from "react";


import images from "../../Importer/Importer";
import ProgressBar from "./ProgressBar";

// import SliderItems from "./SliderItems";
// import WorkPlan from "./WorkPlan";


const Home2 = () => {

  return (

      <>
        <ProgressBar title="Nordea" load={80} />
        {/* <WorkPlan
          iconSource={images['Icons/AR.svg']} 
          workHeader="3D Design & Modeling"
          workParagraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."
        />

<SliderItems
                    slidertxt="طراحی ست اداری شرکت hydout"
                    imageSource={images['Home/image 15.png']} 
                  />
              

       
        <img src={images['Icons/LineStar.svg']} /> */}
      </>
  );
};

export default Home2;
