import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsCameraFill } from "react-icons/bs";

const Profile = () => {
  const userInfo = useSelector((state) => state.artisan.userInfo);
  const [nameDis, setNameDis] = useState(true);
  console.log(userInfo);
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 ">
      <div className="flex flex-col items-center justify-center gap-4 p-5 border-[1px] w-4/12 bg-slate-100 rounded-2xl">
        <div className=" relative">
          <img
            src={userInfo.image}
            alt="User-Image"
            className=" w-36 h-36 rounded-full "
          />
          <BsCameraFill className=" absolute w-8 h-8 left-24 top-28 flex items-center justify-center cursor-pointer" />
        </div>
        <label className="text-xl bg-transparent flex items-center justify-center gap-2">
          Name :{" "}
          <input
            type="text"
            className=" w-72"
            value={userInfo.name}
            disabled={nameDis}
          />
        </label>
        <label className="text-xl bg-transparent flex items-center justify-center gap-2">
          Email :{" "}
          <input
            type="email"
            className="w-72"
            value={userInfo.email}
            disabled={nameDis}
          />
        </label>
        <button className=" font-semibold pl-5 pr-5 p-1 border border-orange-500 rounded-md hover:bg-orange-600 hover:text-white active:bg-transparent active:text-black">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Profile;
