import { useState } from "react";
import "./style.css"
import {menuItems} from "../Services/Data/data"
import { Link } from "react-router-dom";
interface type{
  flag:string;
}
function Drawer(props:type){
  const [showModal,setShowModal]=useState(false)
  const [item] = useState(menuItems);

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
                className="absolute right-4 lg:-top-[495px] -top-10 z-50 animation"
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
          <div className="relative">
            {!showModal ? (
              <button
                className="Homeclose animation"
                type="button"
                onClick={() => setShowModal(true)}
              >
                <svg
                  className="h-8 w-8 text-black"
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
                className="close z-50"
                type="button"
                onClick={() => setShowModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8   text-black"
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
                className="close z-50"
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
          <div className="modal">
            <header className="w-screen p-3 bg-dark shadow overflow-x-hidden z-50">
              <div className="w-screen  flex justify-between p-3">
                <p className="text-white font-bold lg:text-xl text-2xl">
                  <Link to="/">NILL</Link>
                </p>
                <div className="flex justify-between lg:w-32 w-3/6">
                  <p className="text-white font-bold text-xl">منو</p>
                </div>
              </div>
            </header>
            <div
              id="drawer"
              className="fixed h-screen p-4 overflow-y-auto bg-black w-screen  drawer"
              aria-labelledby="drawer-label"
            >
              <div className="pb-20">
                <div className="w-full flex flex-col justify-center items-center">
                  <div className=" navigation">
                    <ul>
                      {item.map((item) => (
                        <li
                          className="p-3 pt-8 hover:underline-offset-0 font-bold z-50 text-2xl text-white"
                          onClick={() => setShowModal(false)}
                        >
                          <Link to={item.route} data-text={item.name}>{item.name}</Link>
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

        {showModal && props.flag == "Home" ? (
          <div className="modal">
            <header className="w-screen p-3 bg-white shadow overflow-x-hidden z-10">
              <div className="w-screen  flex justify-between p-3">
                <p className="text-black font-bold lg:text-xl text-2xl">
                  <Link to="/">NILL</Link>
                </p>
                <div className="flex justify-between lg:w-32 w-3/6">
                  <p className="text-black font-bold text-xl">منو</p>
                </div>
              </div>
            </header>
            <div
              id="drawer"
              className="fixed h-screen p-4 overflow-y-auto bg-black w-screen  drawer animation"
              aria-labelledby="drawer-label"
            >
              <div className="   pb-20 ">
                <div className="w-full flex flex-col justify-center items-center ">
                  <div className="navigation ">
                  
                    <ul className="">
                      {item.map((item) => (
                        <li
                          className="p-3 pt-8 hover:underline-offset-0 font-bold z-50 text-2xl text-white "
                          onClick={() => setShowModal(false)}
                        >
                          <Link to={item.route} data-text={item.name}>{item.name}</Link>
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