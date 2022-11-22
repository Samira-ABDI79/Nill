import { Link } from "react-router-dom";




interface CustomBreadcrumbsProps {
  
   pageName : string;
   route:string;
 
  

  }

  function CustomBreadcrumbs (props: CustomBreadcrumbsProps){
    return(
        <>
  
  <div className=" px-4 py-3 container" dir="rtl">
        <nav className="container">
         
        

          
           
            <div className="flex items-center flex-row mt-8">
        <div className=" h-[10px]  w-[10px] bg-slate-300   rounded-full"></div>
            
        <div className="h-[1px]  w-10 bg-slate-300 "></div>

        <p className="mr-2 text-slate-300 text-sm">
          
           <Link to={props.route}> {props.pageName}</Link>
            </p>
                </div>
          
        
        </nav>
      </div>
      
        </>
    );
 

}
export default CustomBreadcrumbs