import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Menus } from "./type";

export const Header = () => {
  const [widthSize, setWitdthSize] = useState<number>(0);
  const [isVisibleMenuMobile, setIsVisibleMenuMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWitdthSize(window.innerWidth);
    };

    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <header>
      <div className="w-full h-20 shadow-xl p-5 flex justify-center">
        <div className="flex  items-center max-w-[1240px] w-full">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <div
              className={`${
                widthSize < 1000 ? "hidden" : "flex"
              }  justify-center gap-5`}
            >
              <a href={Menus.HOME}>{Menus.HOME}</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
            </div>
            <div
              className={`${
                widthSize < 1000 ? "flex" : "hidden"
              } cursor-pointer`}
            >
              <button
                id="menu-btn"
                className="text-gray-700 text-3xl focus:outline-none "
                onClick={() => setIsVisibleMenuMobile((prev) => !prev)}
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full mt-1 ${isVisibleMenuMobile ? "flex" : "hidden"}`}>
        <div className="flex flex-col gap-3">
          <a href="#" className="border-b border-gray-100 p-5 block">
            Home
          </a>
          <a href="#" className="border-b border-gray-100 p-5 block">
            Home
          </a>
          <a href="#" className="border-b border-gray-100 p-5 block">
            Home
          </a>
          <a href="#" className="border-b border-gray-100 p-5 block">
            Home
          </a>
        </div>
      </div>
    </header>
  );
};
