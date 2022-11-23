import React from 'react';

import images from "../../../Importer/Importer";

interface IContactSlider{
    profileName: string;
    profileSource:string;
    sliderP: string;
    theme:string;
}

const ContactSlider = (props: IContactSlider) => {
  if(props.theme === 'dark'){
    return (
      <>
        <div className="relative">
          <img
            className="relative z-10 right-0 top-11"
            src={images["icons/DoubleCoutYellow.svg"]}
            alt=""
          />
          <div className="contact-item-style-dark">
            <div className="flex flex-col">
              <div>
                <div className="flex flex-row items-center">
                  <img src={images["profiles/profile_1.png"]} alt="" />
                  <div className="pr-17">
                    <div>
                      <h6 className="text-white">{props.profileName}</h6>
                    </div>
                    <div>
                      <img src={props.profileSource} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="contactSlider-p">{props.sliderP}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }else{
    return (
      <>
        <div className="relative">
          <img
            className="relative z-10 right-0 top-11"
            src={images["icons/DoubleCout.svg"]}
            alt=""
          />
          <div className="contact-item-style">
            <div className="flex flex-col">
              <div>
                <div className="flex flex-row items-center">
                  <img src={images["profiles/profile_1.png"]} alt="" />
                  <div className="pr-17">
                    <div>
                      <h6 className="text-white">{props.profileName}</h6>
                    </div>
                    <div>
                      <img src={images[props.profileSource]} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="contactSlider-p">{props.sliderP}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

};

export default ContactSlider;