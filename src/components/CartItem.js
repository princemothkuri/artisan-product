import { React, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, deleteItem, resetCart } from "../redux/artisanSlice";
import { ToastContainer, toast } from "react-toastify";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const CartItem = () => {
  const productData = useSelector((state) => state.artisan.productData);
  const dispatch = useDispatch();
  return (
    <div className="w-2/3 pr-10 flex flex-col gap-6 items-start">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-7 mt-6 border-[1px] p-4"
          >
            <div className="flex items-center gap-2">
              <img className="w-28 h-32" src={item.image} alt="product-image" />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() => {
                    if (item.quantity !== 1) {
                      dispatch(
                        addToCart({
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: -1,
                          description: item.description,
                        })
                      );
                    }
                  }}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() =>
                  dispatch(deleteItem(item.id)) &
                  toast.error(`${item.title} is removed.`)
                }
                className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded active:bg-red-300"
              >
                Delete
              </button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded active:bg-blue-300">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error(`Removed all items.`)
        }
        className="bg-red-500 text-white hover:bg-white font-semibold hover:text-red-500 py-2 border border-red-500 hover:border-red-500 rounded active:bg-red-400 active:text-white px-8"
      >
        Reset Cart
      </button>
      <Link to="/">
        <p className="flex flex-row items-center text-lg gap-1 hover:text-blue-800 font-semibold">
          <HiOutlineArrowLeft /> Go shopping
        </p>
      </Link>
    </div>
  );
};

export default CartItem;
