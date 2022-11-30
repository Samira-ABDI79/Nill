
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function NewProject(){
    return (
      <>
        <div className="bg-yellow w-screen py-5 flex justify-center items-center my-12">
          <div className="">
            <p className="font-bold text-2xl lg:text-xl text-center" dir="rtl">
              پروژه جدید داری؟
            </p>

            <Button route="/new-project-form" btnType="simple" btntxt="بیشتر" />
          </div>
        </div>
      </>
    );
}
export default NewProject;