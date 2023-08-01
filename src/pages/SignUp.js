import React from "react";
import google from "./google.png";
import github from "./github.png";
import facebook from "./facebook.png";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/artisanSlice";
import "./signup.css";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const googleHandler = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center p-8 background">
      <div className="border border-gray-300 w-4/12 flex items-center justify-center flex-col rounded-lg bg">
        <div className="flex flex-col items-center justify-center gap-2 font-semibold text-sm text-black p-8">
          <div
            onClick={googleHandler}
            className="text-base w-80 h-12 border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
          >
            <img src={google} className="w-6" alt="googlelogo" />
            <span>SignUp with Google</span>
          </div>
          <div className="text-base w-80 h-12 border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
            <img src={github} className="w-6" alt="githublogo" />
            <span>SignUp with Github</span>
          </div>
          <div className="text-base w-80 h-12 border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
            <img src={facebook} className="w-6" alt="facebook" />
            <span>SignUp with Github</span>
          </div>
        </div>
        <div className="flex flex-row items-center text-black justify-center gap-3 mb-8">
          <hr className="w-40 h-[1px] border-0 dark:bg-gray-400" />
          <p className=" font-semibold text-lg text-black">OR</p>
          <hr className="w-40 h-[1px] border-0 dark:bg-gray-400" />
        </div>
        <div>
          <form className="flex items-start justify-center gap-2 flex-col">
            <p>
              First Name <span className=" text-red-500 text-xl">*</span>
            </p>
            <input
              placeholder="First Name"
              type="text"
              className="w-80 border border-gray-400 p-2 rounded-lg text-lg hover:border-gray-600 focus:outline-none focus:border-gray-800"
            />
            <p>
              Last Name <span className=" text-red-500 text-xl">*</span>
            </p>
            <input
              placeholder="Last Name"
              type="text"
              className="w-80 border border-gray-400 p-2 rounded-lg text-lg hover:border-gray-600 focus:outline-none focus:border-gray-800"
            />
            <p>
              Phone Number <span className=" text-red-500 text-xl">*</span>
            </p>
            <input
              required
              placeholder="Phone Number"
              type="tel"
              className="w-80 border border-gray-400 p-2 rounded-lg text-lg hover:border-gray-600 focus:outline-none focus:border-gray-800"
            />
            <p>
              Email <span className=" text-red-500 text-xl">*</span>
            </p>
            <input
              required
              placeholder="Email"
              type="email"
              className="w-80 border border-gray-400 p-2 rounded-lg text-lg hover:border-gray-600 focus:outline-none focus:border-gray-800"
            />
            <p>Upload photo</p>
            <input
              class=" w-80 p-2 text-lg border border-gray-400 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:border-gray-400 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />

            <p>
              Enter Password <span className=" text-red-500 text-xl">*</span>
            </p>
            <input
              required
              placeholder="Enter Password"
              type="password"
              className="w-80 border border-gray-400 p-2 rounded-lg text-lg hover:border-gray-600 focus:outline-none focus:border-gray-800"
            />
            <p>
              Re-Enter Password <span className=" text-red-500 text-xl">*</span>
            </p>
            <input
              required
              placeholder="Re-Enter Password"
              type="password"
              className="w-80 border border-gray-400 p-2 rounded-lg text-lg hover:border-gray-600 focus:outline-none focus:border-gray-800"
            />
            <input
              type="submit"
              className="self-center border mt-5 mb-5 p-1 w-24 font-semibold text-lg rounded-md border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer active:bg-transparent active:text-black"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
