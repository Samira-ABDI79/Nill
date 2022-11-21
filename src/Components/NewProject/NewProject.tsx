
import { Link } from "react-router-dom";

function NewProject(){
    return (
        <>
        <div className="bg-yellow w-screen py-5 flex justify-center items-center my-12">
           <div className="">
           <p className="font-bold text-2xl lg:text-xl text-center" dir="rtl">پروژه جدید داری؟</p>
            <button className="bg-blue   h-8 mt-12 hover:opacity-75  px-12 font-semibold py-6 flex justify-center items-center">
  <Link to="/new-project-form">درخواست پروژه جدید</Link>
  </button>

           </div>
        </div>
        </>
    )
}
export default NewProject;