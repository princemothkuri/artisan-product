import React, { useEffect, useState } from "react";
import logo from "./logo.PNG";
import cart from "./cart.png";
import prince from "./prince.JPG";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeUser } from "../redux/artisanSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Header() {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.artisan.productData);
  const userInfo = useSelector((state) => state.artisan.userInfo);
  const [signoutButton, setSignoutButton] = useState();
  const [signInButton, setSignInButton] = useState();
  const [toolTip, setToolTip] = useState();
  useEffect(() => {
    if (userInfo) {
      setSignoutButton(false);
      setSignInButton(true);
    } else {
      setSignoutButton(true);
      setSignInButton(false);
    }
  }, [userInfo]);

  const toolTipHandler = () => {
    if (userInfo) {
      setToolTip(userInfo.name);
    } else {
      setToolTip("noName");
    }
  };

  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const signInHandler = () => {
    navigate("/login");
  };

  return (
    <div className="w-full h-24 bg-orange-100 border-b-[1px] border-b-gray-200 flex items-center justify-between sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div className="flex items-center mr-96 font-bold text-2xl">
          <Link to="/">
            <img src={logo} alt="logo" className=" w-35 h-20" />
          </Link>
        </div>

        <div className=" ml-20 flex items-center gap-8">
          <div>
            <ul className="flex items-center gap-8">
              <Link to="/">
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                  Home
                </li>
              </Link>
              {/* <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Pages
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Shop
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Element
              </li> */}
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
          <Link to="/profile">
            <img
              title={toolTip}
              onMouseEnter={toolTipHandler}
              hidden={signoutButton}
              src={userInfo ? userInfo.image : prince}
              alt="userImage"
              className="w-8 h-8 rounded-full"
            />
          </Link>
          <button
            onClick={signoutHandler}
            className="text-base text-red-900 border border-red-700 rounded-md p-1 font-bold hover:text-white hover:bg-red-700 cursor-pointer duration-300"
            hidden={signoutButton}
          >
            sign out
          </button>
          <button
            onClick={signInHandler}
            className="text-base text-green-600 border border-green-700 rounded-md p-1 font-bold hover:text-white hover:bg-green-700 cursor-pointer duration-300"
            hidden={signInButton}
          >
            sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
