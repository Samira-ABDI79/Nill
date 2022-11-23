interface IEllipseType{
    ellipseTheme: string;
    ellipsetxt: string;
}



const Ellipse = (props:IEllipseType) => {
    if (props.ellipseTheme==='dark') {
        return (
          <>
            <div className="flex flex-row align-item-baseline">
            <div>
                <svg
                  width="56"
                  height="8"
                  viewBox="0 0 56 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="52" cy="4" r="4" fill="#D0D0D0" />
                  <line
                    x1="49.5"
                    y1="4.5"
                    x2="0.5"
                    y2="4.5"
                    stroke="#D0D0D0"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div>
                <h6 className="mr-2 light-theme-txt">{props.ellipsetxt}</h6>
              </div>
              
            </div>
          </>
        );
    } else {
      return (
        <>
          <div className="flex flex-row align-item-baseline">
            <div>
              <svg
                width="56"
                height="8"
                viewBox="0 0 56 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="52" cy="4" r="4" fill="#1C1C1C" />
                <line
                  x1="49.5"
                  y1="4.5"
                  x2="0.5"
                  y2="4.5"
                  stroke="#1C1C1C"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div>
              <h6 className="mr-2 dark-theme-txt">{props.ellipsetxt}</h6>
            </div>
          </div>
        </>
      );
    }
};

export default Ellipse;