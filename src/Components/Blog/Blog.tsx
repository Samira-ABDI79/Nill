import images from "src/Importer/Importer";
function Blog (){
    return (
        <>
        <div className="container" dir="rtl">
            <h1 className="font-bold  text-4xl  ">اخبار و مقالات</h1>
            <p className="text-slate-300 text-sm mt-16 ">Decomber 18 , 2022</p>
            <p className="font-bold  text-3xl  my-6">موتور رندرینگ جدید در انتظار افترافکت</p>
            <img src={images['Blog/image 12.png']} alt="موتور رندرینگ جدید در انتظار افترافکت" />
            <p className="text-xl my-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از  طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی نمورد نیاز است </p>

        </div>
        </>
    )
}

export default Blog;