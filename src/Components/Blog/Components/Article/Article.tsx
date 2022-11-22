
interface data{
    date:string;
title:string;
text:string;
image:string;
}
function Article(props:data){
    return(
        <>
        
<div>
<div className="h-[1px] bg-white w-full  "></div>
<div className=" flex lg:items-center py-6 flex-col lg:flex-row ">
<div className="lg:w-2/5">
<img src={props.image} alt={props.title} className=" w-full "/>

</div>
    <div className="lg:pr-8">
    <p className="text-slate-300 text-sm lg:mt-0 mt-4 ">{props.date}</p>
            <p className="font-bold  text-2xl  mt-2">{props.title}</p>
            <p className="font-bold  text-xl lg:text-lg mt-8">{props.text}</p>

           

    </div>
</div>


</div>
        </>
    )
}

export default Article