import { useState } from "react";

const links = [
  {
    text: "icon",
  
  },
  {
    text: "icon",
  
  },
  {
    text: "icon",
  
  },
  
];


const Footer = () => {
  const [item] = useState(links);

  return (
    <>
<footer>


    <div className="bg-blackfooter w-screen p-7 flex  flex-col lg:flex-row md:flex-row justify-start justify-items-start  lg:justify-between  lg:justify-items-center md:justify-between  md:justify-items-center">
      <p className="text-white text-xs ">
      © Inter  Systems B.V. 1999 - 2022
      </p>
      <div className="text-white">
      {item.map((link) => (
        <a  className="underline text-xs p-2 block lg:inline-block md:inline-block" >{link.text}</a>
       
        ))}
      </div>

    </div>
    </footer>
    </>
  );
};

export default Footer;
