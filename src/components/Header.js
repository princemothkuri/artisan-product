import React from "react";
import logo from "./logo.PNG";
import cart from "./cart.png";
import prince from "./prince.JPG";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const productData = useSelector((state) => state.artisan.productData);
  return (
    <div className="w-full h-24 bg-orange-100 border-b-[1px] border-b-gray-200 flex items-center justify-between sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div className="flex items-center mr-96 font-bold text-2xl">
          <Link to="/">
            <img src={logo} alt="logo" className=" w-35 h-20" />
          </Link>
        </div>

        <div className=" ml-72 flex items-center gap-8">
          <div>
            <ul className="flex items-center gap-8">
              <Link to="/">
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                  Home
                </li>
              </Link>
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
          <Link to="/cart">
            <div className="relative">
              <img src={cart} className="w-6" alt="cart" />
              <span className=" absolute w-6 top-1 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <img src={prince} alt="userImage" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Header;
