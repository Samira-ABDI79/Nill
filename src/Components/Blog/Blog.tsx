import { useState } from "react";
import {BlogsData} from "./data"
import images from "src/Importer/Importer";
import Article from "./Components/Article/Article";
function Blog (){
  const [articleData,setArticleData]=useState(BlogsData);

    return (
        <>
        <div className="container pb-20 pt-10" dir="rtl">
            <h1 className="font-bold  text-4xl  ">اخبار و مقالات</h1>
            <p className="text-slate-300 text-sm mt-16 ">Decomber 18 , 2022</p>
            <p className="font-bold  text-3xl  my-6">موتور رندرینگ جدید در انتظار افترافکت</p>
            <img src={images['Blog/image 12.png']} alt="موتور رندرینگ جدید در انتظار افترافکت" />
            <p className="text-xl my-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از  طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی نمورد نیاز است </p>
            {articleData.map((item) => (
                <Article 
                date={item.date}
                title={item.title}
                text={item.text}
                image={item.image}
                />
            ))}
<div className="h-[1px] bg-white w-full  "></div>

        </div>

        </>
    )
}

export default Blog;