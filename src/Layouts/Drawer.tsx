import { useState } from "react";
import "./style.css";
import { menuItems } from "../Services/Data/data";
import { Link } from "react-router-dom";
interface type {
  flag: string;
}
function Drawer(props: type) {
  const [showModal, setShowModal] = useState(false);
  const [item] = useState(menuItems);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      {props.flag == "Post" ? (
        <div className="relative animation" dir="rtl">
          {!showModal ? (
            <div
              className="absolute right-4 lg:-top-[495px] -top-10 z-50"
              dir="rtl"
            >
              <button
                className="animation"
                type="button"
                onClick={() => setShowModal(true)}
              >
                <svg
                  className="h-8 w-8 text-white font-bold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />{" "}
                  <line x1="3" y1="6" x2="21" y2="6" />{" "}
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          ) : (
            <></>
          )}
          {showModal ? (
            <button
              className="absolute right-4 lg:-top-[489px] -top-10 z-50 animation"
              type="button"
              onClick={() => setShowModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}

      {props.flag == "Home" ? (
        <div>
          <div className="nav-full">
            <div className="">
              <div className={navOpen ? "navbar-present" : "navbar-present bg-white"}>
                <div className="logo-present">
                  <p
                    className={
                      navOpen
                        ? "text-white font-bold lg:text-xl text-2xl"
                        : "text-black font-bold lg:text-xl text-2xl"
                    }
                  >
                    <Link to="/">NILL</Link>
                  </p>
                </div>

                <div
                  className="menu-toggle-present"
                  onClick={() => setNavOpen(!navOpen)}
                >
                  <div>
                    <p
                      className={
                        navOpen
                          ? "text-white font-bold text-xl"
                          : "text-black font-bold text-xl"
                      }
                    >
                      <Link to="/">??????</Link>
                    </p>
                  </div>
                  <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                    <span
                      className={navOpen ? "lineTop spin" : "lineTop"}
                    ></span>
                    <span
                      className={navOpen ? "lineBottom spin" : "lineBottom"}
                    ></span>
                  </div>
                </div>
              </div>

              <div
                className="nav-overlay navigation"
                style={{
                  top: navOpen ? "0" : "-100%",
                  transitionDelay: navOpen ? "0s" : "0s",
                }}
              >
                <ul className="nav-links">
                  {item.map((item) => (
                    <li
                      onClick={() => setShowModal(false)}
                      className="nav-item p-3 mb-4 mt-4 hover:underline-offset-0 font-bold z-50 text-2xl text-white"
                    >
                      <Link
                        to={item.route}
                        data-text={item.name}
                        onClick={() => setNavOpen(!navOpen)}
                        style={{
                          top: navOpen ? "0" : "120px",
                          transitionDelay: navOpen ? "0.8s" : "0s",
                        }}
                      >
                        {item.name}
                      </Link>
                      <div className="nav-item-wrapper"></div>
                    </li>
                  ))}
                </ul>
                <div className="nav-footer">
                  <div
                    className="location"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.2s" : "0s",
                    }}
                  >
                    <span>NILL PRESENTS</span>
                  </div>
                  <div className="nav-social-media">
                    <ul>
                      <li>
                        <a
                          href="/#"
                          style={{
                            bottom: navOpen ? "0" : "-20px",
                            opacity: navOpen ? "1" : "0",
                            transitionDelay: navOpen ? "1.3s" : "0s",
                          }}
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#"
                          style={{
                            bottom: navOpen ? "0" : "-20px",
                            opacity: navOpen ? "1" : "0",
                            transitionDelay: navOpen ? "1.4s" : "0s",
                          }}
                        >
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {props.flag == "Main" ? (
        <div className="relative">
          {!showModal ? (
            <button
              className="close"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />{" "}
                <line x1="3" y1="6" x2="21" y2="6" />{" "}
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          ) : (
            <></>
          )}
          {showModal ? (
            <button
              className="close z-50 "
              type="button"
              onClick={() => setShowModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      {showModal ? (
        <div className="modal ">
          <header className="w-screen p-3 bg-dark shadow overflow-x-hidden z-50 ">
            <div className="w-screen  flex justify-between p-3 overflow-y-hidden">
              <p className="text-white font-bold lg:text-xl text-2xl">
                <Link to="/">NILL</Link>
              </p>
              <div className="flex justify-between lg:w-32 w-3/6">
                <p className="text-white font-bold text-xl">??????</p>
              </div>
            </div>
          </header>
          <div
            id="drawer"
            className="fixed h-screen p-4 overflow-y-auto bg-black w-screen  drawer  "
            aria-labelledby="drawer-label"
          >
            <div className="pb-20">
              <div className="w-full flex flex-col justify-center items-center">
                <div className=" navigation">
                  <ul>
                    {item.map((item) => (
                      <li
                        className="p-3 pt-7 hover:underline-offset-0 font-bold z-50 text-2xl text-white"
                        onClick={() => setShowModal(false)}
                      >
                        <Link to={item.route} data-text={item.name}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

     
    </>
  );
}
export default Drawer;
