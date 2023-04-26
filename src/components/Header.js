import React from "react";
import logo from "./logo.PNG";
import cart from "./cart.png";
import prince from "./prince.JPG";

function Header() {
  return (
    <div className="w-full h-24 bg-orange-100 border-b-[1px] border-b-gray-200 flex items-center justify-between sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center mr-96 font-bold text-2xl">
          <img src={logo} alt="logo" className=" w-35 h-20" />
        </div>
        <div className=" ml-24 flex items-center gap-8">
          <div>
            <ul className="flex items-center gap-8">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Home
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Pages
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Shop
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Element
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
          <div className="relative">
            <img src={cart} className="w-6" alt="cart" />
            <span className=" absolute w-6 top-1 left-0 text-sm flex items-center justify-center font-semibold">
              0
            </span>
          </div>
          <img src={prince} alt="user-image" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Header;
