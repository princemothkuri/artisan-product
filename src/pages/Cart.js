import React from "react";
import { useSelector } from "react-redux";
import background from "./bgImage.JPG";
import CartItem from "../components/CartItem";

const Cart = () => {
  const productData = useSelector((state) => state.artisan.productData);
  return (
    <div>
      <div>
        <img
          src={background}
          alt="Image"
          className="w-full bg-cover h-auto object-cover"
        />
      </div>
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-grey-400 pb-6">
            <h2 className="text-2xl font-medium text-center">Cart Total</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">$ 200</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
                veritatis.
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">$200</span>
          </p>
          <button className="bg-black text-white py-3 mt-6 hover:bg-gray-800 duration-300 w-full  active:bg-black text-lg">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
