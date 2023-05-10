import React from "react";
import logo from "./Logo.PNG";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import google from "./google.png";
import github from "./github.png";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/artisanSlice";

const Login = () => {
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
    <div>
      <section>
        <div className="logo">
          <div>
            <img
              src={logo}
              alt="logo"
              width="70%"
              style={{
                marginLeft: 100 + "px",
              }}
            />
          </div>
        </div>

        <div className="container" style={{ marginLeft: 10 + "%" }}>
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forget">
              <label className="flex flex-row gap-1 items-center justify-center cursor-pointer">
                <input type="checkbox" name="check" id="check" />
                <p>Remember me</p>
              </label>
              <a href="#">Forgotten password</a>
            </div>
            <div className="btn">
              <input type="button" value="Login" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-center gap-3 mt-5">
                <hr width="40%" />
                <p className=" font-semibold text-lg text-white">OR</p>
                <hr width="40%" />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div
                  onClick={googleHandler}
                  className="text-base w-80 h-12 border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
                >
                  <img src={google} className="w-6" alt="googlelogo" />
                  <span className="text-sm text-white">
                    Sign in with Google
                  </span>
                </div>
                <div className="text-base w-80 h-12 border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                  <img src={github} className="w-6" alt="githublogo" />
                  <span className="text-sm text-white">
                    Sign in with Github
                  </span>
                </div>
              </div>
            </div>
            <div className="no-account">
              Don't have an account?
              <a href="sellers sign up page.html">Sign up</a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
