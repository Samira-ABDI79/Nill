import { Link } from "react-router-dom";

interface CustomBreadcrumbsProps {
  pageName: string;
  route: string;
  className?: string;
}

function CustomBreadcrumbs(props: CustomBreadcrumbsProps) {
  return (
    <>
      <div className=" px-4 py-3 container" dir="rtl">
        <nav className="container">
          <div className="flex items-center flex-row mt-8">
            <div className="text-zinc-500">
              <svg
                width="56"
                height="8"
                viewBox="0 0 56 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="52"
                  cy="4"
                  r="4"
                  fill={`${props.className ? "#000" : "#D0D0D0"}`}
                />
                <line
                  x1="49.5"
                  y1="4.5"
                  x2="0.5"
                  y2="4.5"
                  stroke={`${props.className ? "#000" : "#D0D0D0"}`}
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <p className="mr-2 text-zinc-500 text-sm">
              <Link to={props.route} className={`${props.className}`}>
                {" "}
                {props.pageName}
              </Link>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
export default CustomBreadcrumbs;
