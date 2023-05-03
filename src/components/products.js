import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/artisanSlice";
import { ToastContainer, toast } from "react-toastify";

const Products = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  let [baseQty, setBasQty] = useState(1);
  const [details, setDetails] = useState({});
  useEffect(() => {
    setDetails(location.state.item);
  });
  return (
    <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
      <div>
        <img
          className="w-full h-[550px] object-cover border-[1px] p-5"
          src={details.image}
          alt="productImg"
        />
      </div>
      <div className="w-3/5 flex flex-col justify-center gap-12">
        <div>
          <h1 className="text-4xl font-semibold">{details.title}</h1>
          <p className="font-semibold text-lg mt-4">${details.price}</p>
        </div>
        <div className="flex items-center text-base gap-2">
          <div className="flex">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </div>
          <p className="text-xs text-gray-500">(0 Customer review)</p>
        </div>
        <p className="text-basse text-gray-500 -mt-3">{details.description}</p>
        <div className="flex items-center gap-4">
          <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
            <p className="text-sm">Quantity</p>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <button
                onClick={() =>
                  baseQty === 1 ? setBasQty(1) : setBasQty((baseQty -= 1))
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                -
              </button>
              <span>{baseQty}</span>
              <button
                onClick={() => setBasQty((baseQty += 1))}
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: details.id,
                  title: details.title,
                  image: details.image,
                  price: details.price,
                  quantity: baseQty,
                  description: details.description,
                })
              ) & toast.success(`${details.title} is added to cart`)
            }
            className="bg-black text-white py-3 px-6 active:bg-gray-800"
          >
            add to cart
          </button>
        </div>
        <p className="text-base text-gray-500">
          Category:{" "}
          <span className="font-medium capitalize">{details.category}</span>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Products;
