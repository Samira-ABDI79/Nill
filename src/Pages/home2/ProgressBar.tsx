interface IProgressBarType {
  load: number;
  title: string;
}
import "../../Assets/styles/css/components/progress.css"
const ProgressBar = (props: IProgressBarType) => {
  const style = {
    width: props.load + "%",
  };
  return (
    
    <div dir="ltr">
      <div className="progress-title">{props.title}</div>
      <div className="progress progress-bg relative">
        <div className="absolute">
          <div className="end-progress"></div>
        </div>
        <div className="relative during-progress" style={style}>
          <h2 className="precentage-txt absolute">{props.load}%</h2>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
