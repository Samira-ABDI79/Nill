import { Link } from "react-router-dom";
import "../../Assets/styles/css/components/button.css";
interface IButtonType {
  btntxt: string;
  btnType: "simple" | "export" | "verify" | "initialize" | "render";
  route: string;
}

const Button = (props: IButtonType) => {
  if (props.btnType === "simple")
    return (
      <button className="button button--hyperion mt-6">
        <span>
          <span>
            <Link to={props.route}>{props.btntxt}</Link>
          </span>
        </span>
      </button>
    );

  if (props.btnType === "export")
    return (
      <button className="button button--calypso">
        <span>
          <span>
            <Link to={props.route}>{props.btntxt}</Link>
          </span>
        </span>
      </button>
    );

  if (props.btnType === "initialize")
    return (
      <button className="button button--anthe">
        <span>
          <span>
            <Link to={props.route}>{props.btntxt}</Link>
          </span>
        </span>
      </button>
    );

  if (props.btnType === "render")
    return (
      <button className="button button--mimas">
        <span>
          <span>
            <Link to={props.route}>{props.btntxt}</Link>
          </span>
        </span>
      </button>
    );
};

export default Button;
