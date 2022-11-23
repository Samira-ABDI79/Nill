
import images from "../../../Importer/Importer";

import "../../Assets/styles/css/components/workPlan.css"

interface IWorkPlan{
    iconSource: string;
    workHeader: string;
    workParagraph: string;
}

const WorkPlan = (props:IWorkPlan) => {
    return (
      <>
        <div className="flex flex-col work-style">
          <div className="pb-6">
            <img src={props.iconSource} alt={props.workHeader} />
          </div>
          <div className="pb-5">
            <h6>{props.workHeader}</h6>
          </div>
          <div>
            <p>{props.workParagraph}</p>
          </div>
        </div>
      </>
    );
};

export default WorkPlan;