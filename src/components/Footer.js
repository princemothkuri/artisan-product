import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import {
  BsPersonFill,
  BsPaypal,
  BsHouse,
  BsHouseAddFill,
  BsHouseDoor,
  BsHouseDoorFill,
  BsHouseExclamationFill,
  BsHouseDash,
  BsHouseDown,
} from "react-icons/bs";
import logo from "./logo.PNG";
import payment from "./payment-logo.PNG";

function Footer() {
  return (
    <div className=" bg-lime-500 text-black py-20 font-sans">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 ">
        <div className="flex flex-col gap-4 justify-center">
          <div>
            <img className=" w-36" src={logo} alt="logo" />
          </div>
          <div>© ReactDB.com</div>
          <div className=" w-56">
            <img src={payment} alt="payment-logo" />
          </div>
          <div className="flex gap-4">
            <FaGithub className="hover:text-gray-800 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-800 cursor-pointer" />
            <FaTwitter className="hover:text-gray-800 cursor-pointer" />
            <FaInstagram className="hover:text-gray-800 cursor-pointer" />
            <FaYoutube className="hover:text-gray-800 cursor-pointer" />
            <FaHome className="hover:text-gray-800 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className=" text-2xl font-semibold mb-4">locate us</h2>
          <div className=" flex flex-col gap-2">
            <p>Gandhi-Nagar, Ghatkesar, HYD</p>
            <p>Mobile: +91 79953 54505</p>
            <p>Phone: +91 79953 54505</p>
            <p>e-mail: princemothkuri@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <h2 className=" text-2xl font-semibold mb-4">profile</h2>
          <p className="flex items-center gap-2 hover:text-gray-800 cursor-pointer">
            <span>
              <BsPersonFill />
            </span>
            my account
          </p>
          <p className="flex items-center gap-2 hover:text-gray-800 cursor-pointer">
            <span>
              <BsPaypal />
            </span>
            checkout
          </p>
          <p className="flex items-center gap-2 hover:text-gray-800 cursor-pointer">
            <span>
              <BsHouseDoorFill />
            </span>
            order tracking
          </p>
          <p className="flex items-center gap-2 hover:text-gray-800 cursor-pointer">
            <span>
              <MdLocationOn />
            </span>
            help & support
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className=" bg-white border-[1px] border-gray-950 px-4 py-2 text-xl"
            type="email"
            placeholder="e-mail"
          />
          <button className=" bg-black text-white h-8 hover:bg-slate-900 active:bg-black">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
